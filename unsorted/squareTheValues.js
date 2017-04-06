//Square each value in a given array, returning that same array with changed values.

function squareTheValues(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] *= arr[i];
    }
    return arr;
}

console.log(squareTheValues([1,2,3,4,5]))
