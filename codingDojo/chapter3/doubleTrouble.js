//Create a function that changes a given array to list each original element
//twice, retaining original order. Convert [4,"Ulysses",42,false] to
//[4,4,"Ulysses","Ulysses",42,42,false,false].

function doubleTrouble(arr){
    var j = arr.length-1;
    for(var i = arr.length*2-1; i >= 0; i--){
        arr[i] = arr[j];
        if(i % 2 == 0){
            j--;
        }
    }
    return arr;
}

console.log(doubleTrouble([4,"Ulysses",42,false]));
