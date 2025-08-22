function ram(){
    let fatherName = 'Dashrath';

    function name(){
        let wifename = 'urmila';
        console.log(fatherName);
    }
    name();
    // console.log(wifename);
}
ram();


// closure in arrow fun

const ram2 = (() => {

    let motherName = 'Kaikai';

    const laxman2 = (()=> {
        
        let figherName = 'Shurpnakha';
    })
    console.log(motherName);
    laxman2();
})
ram2();