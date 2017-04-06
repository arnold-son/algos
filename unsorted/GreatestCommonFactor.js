function rGCF(num1,num2){
    if(num1 == num2){
        return num1
    }
    else if(num1 == 0){
        return num2
    }
    else if(num2 == 0){
        return num1
    }
    else if(num1 > num2){
        return(rGCF(num1%num2,num2))
    }
    else if(num2 > num1){
        return(rGCF(num2%num1,num1))
    }
}

console.log(rGCF(10000000000,15))

// function rGCF2(num1,num2){
//     if(num1 == num2){
//         return num1
//     }
//     else if(num1>num2){
//         return rGCF2(num1-num2,num2)
//     }
//     else if(num2>num1){
//         return rGCF2(num1,num2-num1)
//     }
//
// }
//
// console.log(rGCF2(100000,15))
