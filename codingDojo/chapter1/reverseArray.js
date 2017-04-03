//Given array, write a function that reverses values, in-place.
//Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3]

function reverseArray(arr){
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

console.log(reverseArray([2,4,6,1,3]));
console.log(reverseArray([2,4,6,1,3,7]));
