//You are given an array of length N that contains, in no particular order,
//integers from 0 to N. One integer value is missing. Quickly determine and
//return the missing value. Given ([3,0,1]), return 2.

function missingValue(arr){
    var sigma = 0;
    for(var i = 1; i <= arr.length; i++){
        sigma += i;
    }
    for(var elm of arr){
        sigma -= elm;
    }
    return sigma;
}

console.log(missingValue([3,0,1]))
console.log(missingValue([0]))
console.log(missingValue([1]))

//Second: now the lowest value can be any integer (including negatives), instead
//of always being 0. Given ([2,-4,0,-3,-2,1]) return -1. Given ([5,2,7,8,4,9,3]),
//return 6.

function missingValue2(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
        sum += arr[i];
    }
    var expectedSum = (min + max) * (arr.length + 1) / 2;
    return expectedSum - sum;
}

console.log(missingValue2([2,-4,0,-3,-2,1]))
console.log(missingValue2([5,2,7,8,4,9,3]))
