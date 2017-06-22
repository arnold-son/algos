function longestWord(str){
    var longest = "";
    var word = "";
    var separators = [" ", "\t", "\n", "!", "?", ".", ","];
    for (var i = 0; i < str.length; i++) {
        if(separators.some(function(sep){return str[i] === sep}) && word.length > 0){
            longest = word.length > longest.length ? word : longest;
            word = "";
        } else {
            word+=str[i];
        }
    }
    if (word.length > 0){
        longest = word.length > longest.length ? word : longest;
    }
    return longest;
}

var test = "Snap crackle pop makes the world go round!"

console.log(longestWord(test))
