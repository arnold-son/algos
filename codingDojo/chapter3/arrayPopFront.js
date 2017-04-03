//Given array, remove and return the value at the beginning of the array. Do
//this without using any built-in array methods except pop().

function popFront(arr){
    //Save value of element to be popped
    var toBeRemoved = arr[0];
    //run through the array from first to 2nd last element, overwriting each
    //with the value of the next index element
    for(var i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    //pop off the last value
    arr.pop();
    return toBeRemoved;
}
