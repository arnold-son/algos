function DrAckermann(num1,num2){
    if(num1==0){
        return(num2+1)
    }
    else if(num2==0 && num1>0){
        return DrAckermann(num1-1,1)
    }
    else if(num1>0 && num2>0){
        return DrAckermann(num1-1,DrAckermann(num1,num2-1))
    }
}

console.log(DrAckermann(3,10))
