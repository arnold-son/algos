//Given an array, return the sum of the first value in the array, plus the
//array's length. What happens if the array's first value is not a number,
//but a string (like "what?") or a boolean (like false)?

function firstPlusLength(iterable){
    return iterable[0]+iterable.length;
}

console.log(firstPlusLength([1,2,3,4,5]))
console.log(firstPlusLength("what?"))
console.log(firstPlusLength(false))
