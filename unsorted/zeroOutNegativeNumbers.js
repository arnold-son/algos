//Return the given array, after setting any negative values to zero.

function zeroOutNegativeNumbers(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){arr[i] = 0;}
    }
    return arr;
}

console.log(zeroOutNegativeNumbers([-1,-2,-3,-4,-5,0,5]))
