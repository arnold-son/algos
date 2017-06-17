//The function accepts two non-negative integer values, num1 and num2, and
//follows these rules:
//
//  1) ackermann(0,num2) == num2+1;
//  2) ackermann(num1,0) == ackermann(num1-1,1) if num1 > 0 (otherwise see #1)
//  3) ackermann(num1,num2) == ackermann(num1-1,ackermann(num1,num2-1)).

function ackermann(num1,num2){
    if(num1 === 0){return num2 + 1}
    if(num2 === 0){return ackermann(num1-1,1)}
    return ackermann(num1-1,ackermann(num1,num2-1))
}
