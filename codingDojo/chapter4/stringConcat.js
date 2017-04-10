//String.concat(str2,str3,...,strX) - add string(s) to end of existing one.
//Return new string.

function stringConcat(...strings){
    var concatenated = "";
    for(string in strings){
        concatenated += strings[string];
    }
    return concatenated;
}

console.log(stringConcat("adslfk","123123123","adslkfadfk"))
console.log(stringConcat("adslfk")
