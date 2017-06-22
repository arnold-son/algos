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

console.log("happy\tday")
