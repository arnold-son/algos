//Given an array, find and print its largest element.

function findAndPrintMax(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    console.log(max);
}

findAndPrintMax([1,2,3,6,8,1023,12])
