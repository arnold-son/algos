function censor(str,arr){
    if(arr.length === 0){
        return str
    }
    var newStr = ""
    var censored = "x"
    for(var i = 0; i < str.length; i++){
        if(str[i] === arr[arr.length-1][0]){
            for(var j = 1; j < arr[arr.length-1].length; j++){
                if(str[i+j] === arr[arr.length-1][j]){
                    censored+="x";
                } else {
                    break;
                }
            }
            if(censored.length === arr[arr.length-1].length){
                newStr+=censored;
                i+=censored.length-1;
                censored = "x";
                continue;
            }
            censored = "x";
        }
        newStr+=str[i];
    }
    arr.pop();
    return censor(newStr,arr);
}

var testStr = "Snap crackle pop nincompoop!"
var testArr = ["crack","poop"]

console.log(censor(testStr,testArr))
