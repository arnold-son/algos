//Kaitlin sees beauty in numbers, but also believes that less is more. Implement
//sumToOne(num) that sums a given integer's digits repeatedly until the sum is
// only one digit. Return that one-digit result. Example: sumToOne(928)
//returns 1 because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

// function sumToOne(num){
//     while(String(num).length > 1){
//         sum = 0;
//         for(var i = 0; i < String(num).length; i++){
//             sum += parseInt(String(num)[i]);
//         }
//         num = sum;
//     }
//     return num;
// }

console.log(sumToOne(928))

function sumToOne(num){
    if(num < 10){return num}
    var sum = 0;
    String(num).split("").forEach(function(elem){sum+=parseInt(elem)});
    num = sum;
    return sumToOne(num);
}
