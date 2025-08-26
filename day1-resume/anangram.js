function isTextAnagram(str, compareStr){

    str = str.toLowerCase();
    compareStr = compareStr.toLowerCase();

    let isAnagram = false;
    for( i = 0; i < str.length; i++ ) {

        if( compareStr.includes(str[0]) ) {
            isAnagram = true;
        }
    }
    return isAnagram;
}

console.log(isTextAnagram('Hello', 'oleh'));