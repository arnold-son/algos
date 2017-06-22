function geneticMarker(arr,str){
    if(arr.length === 0){
        return false
    }
    var i = 0;
    while(arr[arr.length-1].length - i >= str.length){
        if(str[i] === arr[arr.length-1][0]){
            for(var j = 1; j < arr[arr.length-1].length; j++){
                if(str[i+j] !== arr[arr.length-1][j] && arr[arr.length-1][j] !== "?"){
                    break;
                }
                if(j === arr[arr.length-1].length-1){
                    return true;
                }
            }
        }
        i++;
    }

    arr.pop();
    return geneticMarker(arr,str)
}

var testStr = "poop"
var testArr = ["cr??k","po?p"]

console.log(geneticMarker(testArr,testStr))
