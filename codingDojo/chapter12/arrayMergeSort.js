//Use the combineArrs() function above to construct mergeSortArr() for an unsorted
//array. What are the run-time and space complexities of your mergeSortArr solution?

function combineArrs(arr1,arr2){
    while(arr2.length > 0){
        var toBeSorted = arr2.pop();
        arr1.push(toBeSorted);
        for(var i = arr1.length - 2; i >= 0; i--){
            if( arr1[i] > toBeSorted){
                arr1[i+1] = arr1[i];
                if( i === 0 ){
                    arr[i] = toBeSorted;
                    break;
                }
            } else if ( arr1[i] < toBeSorted ){
                arr1[i+1] = toBeSorted;
                break;
            }
        }
    }
    return arr1;
}

function mergeSort(arr){
    
}
