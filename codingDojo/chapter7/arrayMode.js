//Create a function that, given an array, returns the most frequent value in the
//array.

function arrayMode(arr){
    var map = {};
    var mode;
    for(var i = 0; i < arr.length; i++){
        if(map[arr[i]] === undefined){
            map[arr[i]] = 0;
        } else{
            map[arr[i]]++;
        }
    }
    for(var key in map){
        if(mode === undefined){
            mode = key;
        } else{
            mode = map[mode] > map[key] ? mode : key;
        }
    }
    return mode;
}

console.log(arrayMode([1,2,3,4,5,1,1,1,1]))
