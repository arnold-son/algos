//Given array and an additional value, insert this value at the beginning of the
//array. Do this without using any built-in array methods.

function pushFront(arr,val){
    //first iteration creates new array element arr[arr.length] with value of arr[arr.length-1]
    for(var i = arr.length; i > 0; i--){
        arr[i] = arr[i-1];
    }
    //at the end, the array is shifted 1 to the right, with [0] and [1] being duplicates.
    //the first of the duplicate values arr[0] is assigned val
    arr[0] = val;
    return arr;
}

var test = [1,2,3,4,5,6,7,8,9,10];

console.log(pushFront(test,123))
