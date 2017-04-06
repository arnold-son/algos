//Create a function that returns a boolean whether the string is a strict
//palindrome. For "a x a" or "racecar", return true. Do not ignore spaces,
//punctuation and capitalization) the letters are the same when reading from the
//back to the front.

function isPalindrome(str){
    //exits if non-string argument is given:
    if(typeof(str) !== "string"){console.log("Argument must be a string.");return}
    //exits if string is shorter than 2 characters:
    else if(str.length < 2){console.log("String must be 2 or more characters.");return}
    //sets initial left/right for string of even length:
    else if(str.length % 2 == 0){
        var right = str.length/2;
        var left = right-1;
    }
    //sets initial left/right for string of odd length:
    else{
        var right = Math.ceil(str.length/2);
        var left = right-2;
    }
    //iterates through str index starting from center outward, comparing left and right characters:
    for(var right = right; right < str.length; right++){
        //anytime left/right are not matching, return false:
        if(str[left] !== str[right]){return false}
        //update left position:
        else{left--}
    }
    //return true once confirmed to have no mismatching characters:
    return true;
}

console.log(isPalindrome("a x a"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("abcdeedcba"))
console.log(isPalindrome("abcdeedcbaaaaadsfasdf"))
console.log(isPalindrome("a"))
