//Just the facts, ma'am. Factorials, that is. Write a function factorial(num)
//that, given a number, returns the product (multiplication) of all positive
//integers from 1 up to number (inclusive). For example, factorial(3) = 6;
//factorial(5) = 120.

function factorial(num){
    var factorial = 1;
    for(var i = 2; i <= num; i++){
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(3));
console.log(factorial(5));
