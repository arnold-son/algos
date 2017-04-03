//Write a function that accepts ANY array, and returns a new array with the
//array values that are greater than its 2nd value. Print how many values this
//is. What will you do if the array is only one element long?

function valuesGreaterThanSecondGeneralized(arr){
    if(arr.length < 2){
        console.log("There is no second value in the array.")
        return
    }
    else{
        newArr = [];
        for(var i = 0; i < arr.length; i++){
            if(i != 1 && arr[i] > arr[1]){
                newArr.push(arr[i]);
            }
        }
        console.log("There are " + newArr.length + " values greater than the second value.")
        return newArr;
    }
}

console.log(valuesGreaterThanSecondGeneralized([1,3,5,7,9,13]));
