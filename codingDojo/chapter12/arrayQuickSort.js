function quickSort(arr,start,end){
    console.log("====================================\n")
    console.log("range: ", start, " to ", end)
    console.log("array before sort: ", arr)
    if(start === undefined){
        start = 0;
        end = arr.length;
    } else if(start >= end){
        return
    }
    var j = start + 1;
    for (var i = start + 1; i < end; i++) {
        if(arr[i] < arr[start]){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    if(j - 1 !== start){
        var temp = arr[start];
        arr[start] = arr[j-1];
        arr[j-1] = temp;
    }
    console.log("Sorted index: ", start)
    console.log("array: ", arr)
    console.log("pivot: ", j-1)
    if(j - 1 === start || j - 1 === start + 1){
        quickSort(arr,j,end);
    } else if(j === end || j === end - 1){
        quickSort(arr,start,j-1);
    } else {
        quickSort(arr,start,j-1);
        quickSort(arr,j,end);
    }
}

var test = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

quickSort(test)
console.log(test)
