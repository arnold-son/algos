//String.search(val) - search string for the given val (another string). Return
//the index position of the first match found (or -1 if not found).

function stringSearch(str,val){
    var pos = -1;
    for(var i = 0; i < str.length; i++){
        if(val.length > str.length-i){return pos}
        else if(str[i] === val[0]){
            var temp = i;
            while(str[i] === val[i-temp] && str[i] !== undefined){i++}
            if(i - temp == val.length){pos = temp; return pos}
            i = temp;
        }
    }
    return pos;
}

console.log(stringSearch("abcde","e"))
console.log("abcde".search("e"))

console.log(stringSearch("The quick brown fox jumps over the lazy dog","quick"))
console.log("The quick brown fox jumps over the lazy dog".search("quick"))

console.log(stringSearch("The quick brown fox jumps over the lazy dog","fox"))
console.log("The quick brown fox jumps over the lazy dog".search("fox"))

console.log(stringSearch("The quick brown fox jumps over the lazy dog","dog"))
console.log("The quick brown fox jumps over the lazy dog".search("dog"))

console.log(stringSearch("The quick brown fox jumps over the lazy dog","qk"))
console.log("The quick brown fox jumps over the lazy dog".search("qk"))
