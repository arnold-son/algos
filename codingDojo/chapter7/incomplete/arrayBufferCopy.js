//Create arrBufferCopy(sourceArr,destArr,sourceStartIdx,destStartIdx,numVals) to
//copy numVals values starting at sourceArr[sourceStartIdx] to destArr[destStartIdx] etc.
//Do not lengthen destArr, nor read off the end of sourceArr.

function arrBufferCopy(sourceArr,destArr,sourceStartIdx,destStartIdx,numVals){
    var i = 0;
    while(sourceArr[sourceStartIdx+i] !== undefined && destArr[destStartIdx+i] !== undefined && numVals > 0){
        destArr[destStartIdx+i] = sourceArr[sourceStartIdx+i];
        numVals--;
        i++;
    }
}

var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];
arrBufferCopy(arr1,arr2,0,0,5)
console.log(arr1,arr2)
arrBufferCopy(arr1,arr2,0,2,3)
console.log(arr1,arr2)

//Second: If you reach either array's end, wrap around to continue
//writing/reading at beginning of array.

//add later

//Third: if numVals > destArr.length, only copy the minimum needed amount.

//add later

//Fourth: sourceArr can now be the same array as destArr. Only handle the
//non-wrap case. That is, you can assume that you won't need to read beyond
//arr.length. You can extend the array on writes.

//add later

//Fifth: Handle all possible cases where sourceArr and destArr are the same
//array, including wraparound, not overwriting original array data prematurely,
//nor extending it, but copying all data in-place. If arr.length is 100, how
//would you handle significant wraparound and overwriting, such as
//arrBufferCopy(arr,arr,30,80,95)?
