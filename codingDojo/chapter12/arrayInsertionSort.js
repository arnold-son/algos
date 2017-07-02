//Create a function that uses insertion sort to sort an unsorted array in-place.
//What is the run-time complexity? What is the space complexity?
var test = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
var test2 = [3,4,3,4,4,4,4,1,1,1,1,3,5,2,1,2,5]

function insertionSort(arr){
    for(var i = 1; i < arr.length; i++){
        var toBeSorted = arr[i];
        for(var j = i - 1; j >= 0; j--){
            if (toBeSorted < arr[j]){
                arr[j+1] = arr[j];
                if(j === 0){
                    arr[j] = toBeSorted;
                }
            } else if (toBeSorted >= arr[j]){
                arr[j+1] = toBeSorted;
                break;
            }
        }
    }
    return arr;
}

console.log(insertionSort(test2))
