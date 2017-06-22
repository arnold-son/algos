function arrayOfRandomIntegers(length,min,max){
    arr = [];
    if(min === undefined){
        min = 0;
    }
    if(max === undefined){
        max = 1000;
    }
    if(length === undefined){
        length = 10;
    }
    for(var i = 0; i < length; i++){
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}
