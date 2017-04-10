//String.trim() - remove whitespace (spaces, tabs, newlines) from both sides,
//and return a new string. Example: " \n   hello goodbye \t   ".trim() should
//return "hello goodbye".

function stringTrim(str){
    var start;
    var end;
    for(var i = 0; i < str.length; i++){
        if(str[i] !== " " && str[i] !== "\n" && str[i] !== "\t"){
            start = i;
            break;
        }
    }
    for(var i = str.length-1; i >= 0; i--){
        if(str[i] !== " " && str[i] !== "\n" && str[i] !== "\t"){
            end = i+1;
            break;
        }
    }
    if(start && end){return str.slice(start,end)}
    else{return ""}
}

console.log(stringTrim(" \n   hello goodbye \t   "))
console.log(stringTrim(" \n   h \t   "))
console.log(stringTrim(" \n    \t   "))
