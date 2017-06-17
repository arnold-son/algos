//Given num, return the product of ints from 1 up to to num. If less than zero,
//treat as zero. If not integer, truncate. Experts tell us 0! is 1.

function rFactorial(num){
    num = Math.trunc(num);
    if(num < 1){ return 1 }
    return num * rFactorial(num - 1);
}
