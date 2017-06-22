function isRotation(str1,str2,num){
    if(str1.length !== str2.length){
        return false
    }
    if(num === undefined){num = str1.length - 1}
    if(str1 === str2){
        return true;
    }
    if(num === 0){
        return false;
    }
    var rotatedOnce = str1[str1.length-1];
    for(var i = 0; i < str1.length - 1; i++){
        rotatedOnce+=str1[i];
    }
    return isRotation(rotatedOnce,str2,num-1)
}

console.log(isRotation("Boris Godunov","dunovBoris Go"))
