function strToWordArr(str){
    var word = "";
    var arr = [];
    var separators = [" ", "\t", "\n"]
    for (var i = 0; i < str.length; i++) {
        if(separators.some(function(sep){return str[i] === sep}) && word.length > 0){
            arr.push(word);
            word = "";
        } else {
            word+=str[i];
        }
    }
    if(word.length > 0){ arr.push(word) }
    return arr;
}

function reverseWordOrder(str){
    var words = strToWordArr(str);
    var newStr = "";
    for(var i = words.length - 1; i >= 0; i--){
        if(i < words.length - 1 ){ newStr += " " }
        newStr += words[i];
    }
    return newStr;
}

var test = "This is a test"
console.log(reverseWordOrder(test))
