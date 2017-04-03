//Return the second-largest element of an array. Given [42,1,4,Math.PI,7],
//return 7. If the array is too short, return null.
function secondLargest(arr){
    if(arr.length < 2){return null}
    var max = arr[0];
    var secondMax;
    for(var i = 1; i < arr.length; i++){
        if(max < arr[i]){secondMax = max; max = arr[i]}
        else if(max == arr[0]){
            if(secondMax == undefined){secondMax = arr[1]}
            else if(secondMax < arr[i]){secondMax = arr[i]}
        }
    }
    if(secondMax != undefined){return secondMax}
    else{return false;}
}

console.log(secondLargest([1,2,3,4,5,6,7]))
console.log(secondLargest([42,1,4,Math.PI,7]))
console.log(secondLargest([42]))
console.log(secondLargest([3,1,2]))
