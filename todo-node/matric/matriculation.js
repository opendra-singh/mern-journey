let totalRequest = 0;

let rateLimitation = [];
setTimeout( () => {
    rateLimitation = [];
}, 1000)

export const reqCount = (req, res, next) => {

    totalRequest++;
    req.totalRequest = totalRequest;
    next()
}

export const rateLimiting = (req, res, next) => {

    const userIP = req.ip;
    rateLimitation[userIP] = totalRequest;


    if( rateLimitation[userIP] >=5 ) {
        const err = new Error('Rate Limitaion');
        err.name = 'rate_limitation';
        err.msg = "you have reached you per second limit 'i.e 5 req per minute'";
        next(err);
    } else {
        next();
    }
}