//in-place:

function unsortedIntersectionInplace(arr1,arr2){
    for(var i = arr1.length - 1; i >= 0; i--){
        var found = false;
        for(var j = 0; j < arr2.length; j++){
            if(arr2[j] === arr1[i]){
                found = true;
                arr2.splice(j,1);
                break;
            }
        }
        if(!found){
            arr1.pop();
        }
    }
    return arr1;
}
console.log(unsortedIntersectionInplace([2,7,2,1,2],[6,7,2,7,6,2]))
