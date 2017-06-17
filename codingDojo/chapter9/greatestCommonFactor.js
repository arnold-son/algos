//Given two integers, create rGCF(num1,num2) to recursively determine Greatest
//Common Factor (the largest integer dividing evenly into both).

function rGCF(num1,num2)
{
    if(num1 === num2)
    {
        return num1
    }
    if(num1 > num2)
    {
        if(num1 % num2 === 0)
        {
            return num2
        }
        return rGCF((num1 % num2),num2)
    }
    if(num2 > num1)
    {
        if(num2 % num1 === 0)
        {
            return num1
        }
        return rGCF(num1,(num2 % num1))
    }
}

console.log(rGCF(123456,987654))
