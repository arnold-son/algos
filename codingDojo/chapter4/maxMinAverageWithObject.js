//Given an array, return an object containing the array's max, min and average
//values.

function maxMinAverage(arr){
    var object = {min:arr[0],max:arr[0]}
    var sum = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(object["min"] > arr[i]){object["min"] = arr[i]}
        if(object["max"] < arr[i]){object["max"] = arr[i]}
        sum += arr[i];
    }
    object["avg"] = sum/arr.length;
    return object
}

console.log(maxMinAverage([1,2,3]))
