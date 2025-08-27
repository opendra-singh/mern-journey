function counter(){

    let counter = 1;
    function innerCounter(){

        counter += counter++;
    }
    innerCounter();
    return counter;
}
console.log(counter());

// arrow function counter

let counterArrow = () => {
    let countChar = 1;

    let counterInnerArrow = () => {
        countChar += countChar++;
    }
    counterInnerArrow();
    return countChar;
}
console.log(counterArrow());