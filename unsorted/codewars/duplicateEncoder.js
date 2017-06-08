function dupEncoder(str){
    var map = {};
    var newStr = "";
    for(var i = 0; i < str.length; i++){
        if(map[str[i]] === undefined){
            map[str[i]] = 0;
        } else{
            map[str[i]]++;
        }
    }
    for(var i = 0; i < str.length){
        if(map[str[i]] === 0){
            newStr += "("
        } else{
            newStr += ")"
        }
    }
    return newStr;
}
