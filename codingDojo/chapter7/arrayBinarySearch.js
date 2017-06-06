//Given a sorted array and a value, return whether the array contains that value.
//Do not sequentially iterate the array. Instead, 'divide and conquer', taking
//advantage of the fact that the array is sorted. As always, only use built-in
//functions that you are prepared to recreate (write yourself) on demand!

function rBinarySearch(arr,val){
    if(arr[Math.floor(arr.length/2)] === val){
        return true;
    }
    if(arr[Math.floor(arr.length/2)] > val){
        if(arr.length === 1){return false}
        return rBinarySearch(arr.slice(0,Math.floor(arr.length/2)),val)
    }
    if(arr[Math.floor(arr.length/2)] < val){
        if(Math.floor(arr.length/2)+1 >= arr.length){return false}
        return rBinarySearch(arr.slice(Math.floor(arr.length/2)+1),val)
    }
}
