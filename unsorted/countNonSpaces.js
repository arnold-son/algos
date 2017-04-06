var string = "Honey pie, you are driving me crazy"
//expected output: 29 <=== number of non-space characters found in string
var string2 = "Honey      pie, you       are driving me        crazy"
//expected output: 29 <=== number of non-space characters found in string
function countNonSpaces(str){
    return str.split(" ").join("").length
}

console.log(countNonSpaces(string))
console.log(countNonSpaces(string2))
