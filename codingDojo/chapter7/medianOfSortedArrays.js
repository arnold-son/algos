//Given two arrays that are sorted but not necessarily the same length, find
//the median value. Given ([1,5,9], [1,2,3,4,5,6]), return 4. If the number of
//values is even, return the average of the two middle values. Given
//([1,5,9],[1,2,3,4,5]), return 3.5.

//note: all current solutions pop() all elements from given arrays.

function median(arr1,arr2){
    if(arr1.length < 1 || arr2.length < 1){return}
    var length = arr1.length + arr2.length;
    var n = 0;
    var prev;
    var curr = arr1[arr1.length-1] > arr2[arr2.length-1] ? arr1.pop() : arr2.pop();
    n++;
    while(n <= length/2){
        prev = curr;
        curr = arr1[arr1.length-1] > arr2[arr2.length-1] ? arr1.pop() : arr2.pop();
        n++;
    }
    return (length % 2 === 0 ) ? ((curr + prev) / 2) : curr;
}

console.log(median([1,5,9], [1,2,3,4,5,6]))
console.log(median([1,5,9],[1,2,3,4,5]))

//Second: accept three arrays instead of two.
//Third: handle an arbitrary number of arrays.

function median2(...arrs){
    var length = 0;
    var n = 0;
    var prev;
    var curr;
    var toPop = 0;

    while(n <= length/2){
        toPop = 0;
        for(var i = 0; i < arrs.length; i++){
            if(arrs[i].length === 0){continue}
            if(n === 0){length += arrs[i].length;}
            if(arrs[toPop][arrs[toPop].length-1] < arrs[i][arrs[i].length-1]){
                toPop = i;
            }
        }
        prev = curr;
        curr = arrs[toPop].pop();
        n++;
    }
    return (length % 2 === 0 ) ? ((curr + prev) / 2) : curr;
}

console.log(median2([1,5,9], [1,2,3,4,5,6]))
console.log(median2([1,5,9],[1,2,3,4,5]))
console.log(median2([1,2,3,4,5],[1,2,3],[1,2,3,4,5,6,7]))
