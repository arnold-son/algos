//Given array, and indices start and end, remove vals in that index range,
//working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4),
//change to [20,30,70] and return it.

function removeRange(arr,start,end){
    for(var i = start; i < arr.length-(end-start+1); i++){
        arr[i] = arr[end+1+i-start];
    }
    arr.length -= (end-start+1);
    return arr;
}

console.log(removeRange([20,30,40,50,60,70],2,4))
