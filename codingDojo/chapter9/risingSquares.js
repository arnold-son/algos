//Ever since her dad discovered universal truths about triangles, Sophia
//Pythagoras has loved square numbers. Given positive integer, successively
//print squares of integers up to that integer, first ascending odds, then
//descending evens. Solve recursively with no loops.
//
// Examples:
//
// risingSquare(5) === "1, 9, 25, 16, 4"
//
// risingSquare(8) === "1, 9, 25, 49, 64, 36, 16, 4"

function risingSquares(num,arr){
    if(arr === undefined){
        arr = [];
    }
    if(arr.length === num){
        return arr.join(", ");
    }
    if(arr.length < num/2){
        arr.push((arr.length+1) * 2 - 1);
    } else {
        arr.push((num - arr.length) * 2);
    }
    arr[arr.length-1]*=arr[arr.length-1];
    return risingSquares(num,arr);
}

console.log(risingSquares(5))
console.log(risingSquares(8))
