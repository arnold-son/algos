//Analyze an array's values and print the average.

function getAndPrintAverage(arr){
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum / arr.length);
}

getAndPrintAverage([1,1,1,1,6])
