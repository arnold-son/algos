function radixSort(arr){
    var unsorted = true;
    var divisor = 1;
    while(unsorted){
        unsorted = false;
        var bins = [-1,0,0,0,0,0,0,0,0,0];
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if(!unsorted && arr[i] >= divisor * 10){
                unsorted = true;
            }
            num = Math.floor(arr[i]/divisor)%10
            bins[num]++;
        }
        for (var i = 1; i < bins.length; i++) {
            bins[i]+=bins[i-1];
        }
        for (var i = arr.length-1; i >= 0; i--) {
            num = Math.floor(arr[i]/divisor)%10;
            newArr[bins[num]] = arr[i];
            bins[num]--;
        }
        arr = newArr;
        divisor *= 10;
        console.log(arr)
    }
    return arr;
}

var test = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
console.log("result",radixSort(test))
