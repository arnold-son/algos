//Given a sorted array and a value, recursively determine whether value is found
//within array.

function rBS(arr,val,start,end){
    if(start === undefined){
        start = 0;
        end = arr.length - 1;
    }
    if(start === end){
        return arr[start] === val;
    }
    var mid = Math.floor((end - start)/2) + start
    console.log(start,mid,end)
    if(arr[mid] === val){
        return true
    } else if(val > arr[mid]){
        console.log("was greater")
        mid++;
        if(mid > end){return false}
        return rBS(arr,val,mid,end)
    } else if(val < arr[mid]){
        console.log("was lesser")
        mid--;
        if(mid < start){return false}
        return rBS(arr,val,start,mid)
    }
}

function rBS2(arr,val){
    if(arr.length === 1){
        return arr[0] === val;
    }
    var mid = Math.floor(arr.length/2)
    if(arr[mid] === val){
        return true;
    }
    if(arr[mid] > val){
        return rBS(arr.slice(0,mid),val)
    }
    if(arr[mid] < val){
        return rBS(arr.slice(mid+1),val)
    }
}

console.log(rBS2([1,2,3,4,5,6],4))
