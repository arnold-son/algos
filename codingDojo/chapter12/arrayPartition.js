//Partition unsorted array in-place. Use arr[0] as pivot val; return idx of
//pivot. Input [5,4,9,2,5,3] becomes [4,2,3,5,9,5], return 3.

var test = [5,4,9,2,5,3];

function arrayPartition(arr){
    var pivot = 0;
    var j = arr.length - 1;
    var i = 1;
    while (i < j){
        if(arr[i] < arr[pivot]){
            var temp = arr[i];
            arr[i] = arr[pivot];
            arr[pivot] = temp;
            pivot = i;
            i++;
        } else {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return pivot;
}

function arrayPartition2(arr,pivot){
    if(pivot === undefined){pivot = 0}
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < arr[pivot]){
            if(j === pivot){ pivot = i }
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    if(pivot !== j){
        var temp = arr[j];
        arr[j] = arr[pivot];
        arr[pivot] = temp;
        pivot = j;
    }
    return pivot;
}

arrayPartition2(test)
console.log(test)
