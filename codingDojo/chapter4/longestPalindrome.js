//For this challenge, we will look not only at the entire string provided, but
//also at the substrings within it. Return the longest palindromic substring.
//Given "what up, daddy-o?", return "dad". Given "uh... not much", return "u".
//Include spaces as well (i.e. be strict, as in previous challenge): given
//"Yikes! my favorite racecar erupted!", return "e racecar e". Strings longer
//or shorter than complete words are OK.

function helper(string,left,right){
    var palin = ""
    if(right-1 !== left){palin += string[left+1]}
    for(var right = right; right < string.length; right++){
        if(string[left] !== string[right]){
            return palin
        }
        else{
            palin = string[left] + palin + string[right];
            left--;
        }
    }
}

function longestPalindrome(str){
    var pals = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){pals.push(helper(str,i,i+1))}
        else if(str[i] === str[i+2]){pals.push(helper(str,i,i+2))}
    }
    var longest = str[0];
    for(var i = 0; i < pals.length; i++){
        if(pals[i].length > longest.length){longest = pals[i]}
    }
    return longest;
}

console.log(longestPalindrome("what up, daddy-o?"))
console.log(longestPalindrome("uh... not much"))
console.log(longestPalindrome("Yikes! my favorite racecar erupted!"))
