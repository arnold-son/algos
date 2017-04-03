//Return the element that is N from array's end. Given ([5,2,3,6,4,9,7],3),
//return 4. If the array is too short, return null.

function NthToLast(arr,n){
    if(arr[arr.length-n] != undefined){return arr[arr.length-n]}
    else{return null}
}

console.log(NthToLast([5,2,3,6,4,9,7],3))
