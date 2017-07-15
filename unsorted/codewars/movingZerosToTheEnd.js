//Write an algorithm that takes an array and moves all of the zeros to the end,
//preserving the order of the other elements.

function moveZeros(arr){
    for (var i = arr.length-1; i >= 0; i--) {
        if(arr[i] === 0){
            arr.push(0);
            var j = i;
            while(j+1 < arr.length){
                arr[j] = arr[j+1];
                j++;
            }
            arr.pop();
        }
    }
    return arr;
}
