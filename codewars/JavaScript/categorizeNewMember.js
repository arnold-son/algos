function openOrSenior(data){
    var output = [];
    for(var i = 0; i < data.length; i++){
        if(data[i][0] >= 55 && data[i][1] > 7){
            output.push("Senior");
        } else{
            output.push("Open");
        }
    }
    return output;
}

//Best solutions from codewars.com:
//
// #1
//
// function openOrSenior(data){
//   function determineMembership(member){
//     return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
//   }
//   return data.map(determineMembership);
// }
//
// #2
//
// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }
//
// references:
// Conditional(ternary) Operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// Array.prototype.map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=example
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
