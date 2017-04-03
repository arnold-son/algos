var string = "0s1a3y5w7h9a2t4?6!8?0"
// expected output: 1357924680
function getDigits(str){
    var arr = []
    for (var i = 0; i < str.length; i++){
        if (arr.length < 1){
            if (parseInt(str[i]) > 0){
                arr.push(str[i])
            }
        }
        else if (parseInt(str[i]) >= 0){
            arr.push(str[i])
        }
    }
    if (arr.length > 1){
        return parseInt(arr.join(""))
    }
}

console.log(getDigits(string))
