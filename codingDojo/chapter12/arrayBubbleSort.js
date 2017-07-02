//For review, create a function that uses BubbleSort to sort an unsorted array
//in-place.

function bubbleSort(arr){
    var flipped = true;
    var end = arr.length;
    while(flipped){
        flipped = false;
        for(var i = 0; i < end; i++){
            if(arr[i] > arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                flipped = true;
            }
        }
        end--;
    }
    return arr;
}

var test = [5,8,2,38,27,18,1,4,7]
console.log(bubbleSort(test2))
