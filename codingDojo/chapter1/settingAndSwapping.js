//description: Set myNumber to 42. Set myName to your name. Now swap myNumber
//into myName & vice versa.
var myNumber = 42;
var myName = "Arnold";
console.log(myNumber, myName);
var temp = myNumber;
myNumber = myName;
myName = temp;
console.log(myNumber, myName);
