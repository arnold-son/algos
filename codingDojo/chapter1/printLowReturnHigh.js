//Create a function that takes array of numbers. The function should print the
//lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){
    var min = arr[0];
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}

console.log(printLowReturnHigh([1,2,3,4,5]))
