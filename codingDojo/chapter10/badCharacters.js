function badCharacters(str1,str2){
    var newStr = "";
    var remove = {};
    for (var i = 0; i < str2.length; i++) {
        remove[str2[i]] = str2[i];
    }
    for (var i = 0; i < str1.length; i++) {
        if(remove[str1[i]] === undefined) {
            newStr+=str1[i];
        }
    }
    return newStr;
}
