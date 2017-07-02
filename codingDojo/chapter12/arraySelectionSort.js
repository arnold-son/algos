//For review, create a function that uses SelectionSort to sort an unsorted
//array in-place.

function selectionSort(arr){
    for(var i = 0; i < arr.length - 1; i++){
        var min = i;
        for(var j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(i !== min){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

var test = [5,8,2,38,27,18,1,4,7]

console.log(selectionSort(test))
