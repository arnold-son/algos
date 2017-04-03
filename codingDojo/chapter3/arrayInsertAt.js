//Given array, index, and additional value, insert the value into array at given
//index. Do this without using built-in array methods. You can think of
//pushFront(arr,val) as equivalent to insertAt(arr,0,val)

function insertAt(arr,index,val){
    if(index > arr.length){
        console.log("Cannot insert");
        return arr;
    }
    //create new array element at [arr.length] with value arr[arr.length-1]
    //subsequent iterations overwrite each array element with the value from
    //the array element 1 left of it until the specified index to insert at
    for(var i = arr.length; i > index; i--){
        arr[i] = arr[i-1];
    }
    //the duplicate element at [index] is overwritten with val
    arr[index] = val;
    return arr;
}

var test = [0,1,2,3,4,5,6,7,8,9,10];

// console.log(insertAt(test,0,"hello world!"));
// console.log(insertAt(test,1,"hello world!"));
// console.log(insertAt(test,2,"hello world!"));
// console.log(insertAt(test,5,"hello world!"));
console.log(insertAt(test,12,"hello world!"));
