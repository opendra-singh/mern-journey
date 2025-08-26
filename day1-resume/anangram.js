function countChar(string, newString, char){

    if(newString.split(char).length - 1 !== string.split(char).length - 1) {
        return false;
    } else {
        return true;
    }
}
function isTextAnagram(str, compareStr){

    str = str.toLowerCase();
    compareStr = compareStr.toLowerCase();
    
    let isAnagram = Boolean;

    for( i = 0; i < str.length; i++ ) {

        isAnagram = countChar(str, compareStr, str[i]);
    }
    return isAnagram;
}

console.log(isTextAnagram('abc', 'aab'));