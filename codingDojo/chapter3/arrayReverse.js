//Given a numerical array, reverse the order of values, in-place. The reversed
//array should have the same length, with existing elements moved to other
//indices so that order of elements is reversed. Working 'in-place' means that
//you cannot use a second array - move values within the array that you are given.
//As always, do not use built-in array functions such as splice().

function reverse(arr){
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(reverse([1,2,3,4,5]))
console.log(reverse([1,2,3,4,5,6,7,8]))
