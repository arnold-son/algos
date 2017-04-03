//Create a function that accepts a number as an input. Return a new array that
//counts down by one, from the number (as araay's 'zero'th element) down to 0
//(as the last element). How long is this array?

function countdown(num){
    var arr = [];
    for(var i = num; i >= 0; i--){
        arr.push(i);
    }
    return arr;
}
//The array is num+1 long.
for(var i = 0; i < countdown(7).length; i++){
    console.log(countdown(7)[i]);
}
