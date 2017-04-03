function removeAt(arr,index){
    var valpop = arr[index];
    for(var i = index; i < arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr.pop();
    return arr;
}

function removeDuplicates(arr){
    var map = {};
    for(var i = arr.length-1; i >= 0; i--){
        if(!map[arr[i]]){
            map[arr[i]] = 1;
        }
        else{
            removeAt(arr,i);
        }
    }
    return arr;
}

var test = [1,2,3,4,5];
var test2 = [1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,123123758,1929];
var test3 = [1,1,1,1,1,1,1,1]

console.log(removeDuplicates(test),removeDuplicates(test2),removeDuplicates(test3))
