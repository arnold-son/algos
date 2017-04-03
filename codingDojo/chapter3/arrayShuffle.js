//In JavaScript, the Array object has numerous useful methods. It does not,
//however, contain a method that will randomize the order of an array's elements.
//Let's create shuffle(arr), to efficiently shuffle a given array's values.
//Work in-place, naturally. Do you need to return anything from your function?

function shuffle(arr){
    for(var i = 0; i < arr.length; i++){
        var swapWith = Math.floor(Math.random()*arr.length);
        if(i != swapWith){
            var temp = arr[i];
            arr[i] = arr[swapWith];
            arr[swapWith] = temp;
        }
    }
    return arr;
}

console.log(shuffle([1,2,3,4,5,6,7,8,9,10]))
