//Create function combineArrs(arr1,arr2) that sorts two already separated sorted
//arrays, placing the result back into the first provided array. Can you work
//completely in-place?

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

console.log(combineArrs([1,2,3,4,5],[6,7,8,9,10]))
console.log(combineArrs([1,2,3,4,5],[7,11,15,20,25]))
