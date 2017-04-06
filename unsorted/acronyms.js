var string1 = " there's no free lunch - gotta pay yer way. "
//expected return: "TNFL-GPYW"
var string2 = "Live from New York, it's Saturday Night!"
//expected return: "LFNYISN"

function acronyms(str){
    var arr = str.toUpperCase().split(" ")
    var arr2 = []
    for (var i = 0; i < arr.length; i++){
        if (arr[i].length > 0){
            arr2.push(arr[i][0])
        }
    }
    return arr2.join("")
}

console.log(acronyms(string1));
console.log(acronyms(string2));
