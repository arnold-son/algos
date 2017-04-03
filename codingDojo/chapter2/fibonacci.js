//Create a function to generate Fibonacci numbers. In this famous mathematical
//sequence, each number is the sum of the previous two, starting with values
// 0 and 1. Your function should accept one argument, an index into the sequence
// (where 0 corresponds to the initial value, 4 corresponds to the value four
//later, etc). Examples: fibonacci(0) = 0, fibonacci(1) = 1, fibonacci(2) = 1,
//fibonacci(3) = 2 ... fibonacci(7) = 13, etc

function fibonacci(index){
    if(!(index >= 0)){
        console.log("invalid input")
        return index;
    }
    if(index < 2){
        return index;
    }
    var fib0 = 0;
    var fib1 = 1;
    for(var i = 1; i < index; i++){
        var newfib = fib0 + fib1;
        fib0 = fib1;
        fib1 = newfib;
    }
    return fib1;
}
console.log(fibonacci(7))
