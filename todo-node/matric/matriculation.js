let totalRequest = 0;

let rateLimitation = {};

export const reqCount = (req, res, next) => {

    totalRequest++;
    req.totalRequest = totalRequest;
    next()
}

export const rateLimiting = (req, res, next) => {

    setTimeout( () => {
        rateLimitation = {};
        totalRequest = 0
    }, 5000)

    let userIP = (req.ip == "::1") ? '127.0.1.1' : req.ip;
    if(userIP.includes('::ffff:')){
        userIP = userIP.replace("::ffff:", "");
    }

    if( userIP in rateLimitation ) {

        rateLimitation[userIP] = rateLimitation[userIP] + 1;
    } else{
        
        rateLimitation[userIP] = 1;
    }

    if( rateLimitation[userIP] >= 5 ) {
        const err = new Error('Rate Limitaion');
        err.name = 'rate_limitation';
        err.msg = "you have reached you per second limit 'i.e 5 req per 5 seconds'";
        next(err);
    } else {
        next();
    }
}