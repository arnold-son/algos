//Given a sorted array and a value, recursively determine whether value is found
//within array.
//rBinarySearch([1,3,5,6],4) = false;
//rBinarySearch([4,5,6,8,12],5) =true;

function rBinarySearch(arr,val){
    if(arr[Math.floor(arr.length/2)] == val){return true}
    else if(arr.length == 1){return false}
    else if(arr[Math.floor(arr.length/2)] > val){
        return rBinarySearch(arr.slice(0,Math.floor(arr.length/2)),val);
    }
    else if(arr[Math.floor(arr.length/2)] < val){
        return rBinarySearch(arr.slice(Math.floor(arr.length/2),arr.length),val);
    }
}

// console.log(rBinarySearch([1,3,5,6],4));
// console.log(rBinarySearch([4,5,6,8,12],5));
