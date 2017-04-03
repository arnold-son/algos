//You will be given an array of numbers. After every tenth element, add an
//additional element containing the sum of those ten values. If the array does
//not end aligned evenly with ten elements, add one last sum that includes
//those last elements not yet been included in one of the earlier sums. Given
//the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to
//[1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].

function intermediateSums(arr){
    var sums = [];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
        if((i+1)%10 == 0 || arr[i+1] == undefined){
            sums.push(sum);
            sum = 0;
        }
    }
    var j = arr.length-1;
    var k = sums.length-1;
    for(var i = arr.length+sums.length-1; i >= 0; i--){
        if(i == arr.length+sums.length-1){arr[i] = sums[k];k--}
        else if((i+1) % 11 == 0){arr[i] = sums[k];k--}
        else{arr[i] = arr[j];j--}
    }
    return arr;
}
console.log(intermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2]))
console.log(intermediateSums([1,2,1,2]))
