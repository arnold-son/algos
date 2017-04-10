//String.slice(start,end) - extract part of a string and return in a new one.
//Start and end are indices into the string, with the first character at index 0.
//End param is optional and if present, refers to one beyond the last character
//to include.
//
//Bonus: include support for negative indices, reprsenting offsets from string-end.
//Example: string.slice(-1) returns the string's last character.

function stringSlice(str,start,end){
    if(end === undefined || end > str.length){end = str.length}
    var newStr = "";
    if(start < 0){start += str.length}
    for(var i = start; i < end; i++){
        newStr+=str[i];
    }
    return newStr;
}

// console.log(stringSlice("abcdefghij",0))
// console.log(stringSlice("abcdefghij",0,9))
// console.log(stringSlice("abcdefghij",3,7))
console.log(stringSlice("abcdefghij",-1))
