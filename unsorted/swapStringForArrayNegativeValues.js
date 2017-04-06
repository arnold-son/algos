//Given an array of numbers, replace any negative values with the string 'Dojo'.

function swapStringForArrayNegativeValues(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){arr[i] = 'Dojo'}
    }
    return arr;
}

console.log(swapStringForArrayNegativeValues([-51,-12412,-123,-123,0,123123,82,"asdf",true,false]))
