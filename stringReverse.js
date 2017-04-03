//description: Implement reverseString(str) that, given string, returns that
//string with characters reversed. Given "creature", return "erutaerc".
//Tempting as it seems, do not use the built-in reverse()!

var string = "creature"
//expected output: "erutaerc"
function reverseString(str){
    var arr = []
    for (var i = str.length; i >= 0; i--){
        arr.push(str[i])
    }
    return arr.join("")
}

console.log(reverseString(string))
