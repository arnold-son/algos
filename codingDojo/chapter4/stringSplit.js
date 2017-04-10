//String.split(separator,limit) - split string into an array of substrings,
//returning an array. Separator specifies where to divide substrings and is not
//included in any substring. If "" is specified, split the string on every
//character. Limit is optional and indicates number of splits; additional
//post-limit items should be discarded. Note: existing string is unaffected.

function stringSplit(str,separator,limit){
    var arr = [];
    var strElem = "";
    if(separator === undefined){arr.push(str);return arr}
    if(separator === ""){for(char in str){arr.push(str[char])}}
    else{
        for(var i = 0; i < str.length; i++){
            if(str[i] === separator){arr.push(strElem);strElem = "";continue}
            strElem+=str[i];
        }
        arr.push(strElem);
    }
    if(typeof(limit) === "number"){arr.length = limit};
    return arr;
}

console.log(stringSplit("     "," "))
console.log("     ".split(" "))
console.log(stringSplit("abcd adkadk dkaskdsk "," "))
console.log("abcd adkadk dkaskdsk ".split(" "))
console.log(stringSplit("abcde","",1))
console.log("abcde".split("",1))
console.log(stringSplit("a b c d e",""))
console.log("a b c d e".split(""))
console.log(stringSplit("a b c d e","",5))
console.log("a b c d e".split("",5))
