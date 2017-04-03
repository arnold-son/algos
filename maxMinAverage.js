//Given an array, print the max, min and average values for that array.

function maxMinAverage(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(min > arr[i]){min = arr[i]}
        if(max < arr[i]){max = arr[i]}
        sum+=arr[i];
    }
    console.log("Max: " + max, "Min: " + min, "Average: " + (sum/arr.length));
}

maxMinAverage([1,2,3,1,2,1,5,1,2,5,6]);
