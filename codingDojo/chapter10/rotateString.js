function rotateString(str,num){
    if(num === 0){
        return str;
    }
    var rotatedOnce = str[str.length-1];
    for(var i = 0; i < str.length - 1; i++){
        rotatedOnce+=str[i];
    }
    return rotateString(rotatedOnce,num-1)
}

var test = "Boris Godunov"

console.log(rotateString(test,5))
