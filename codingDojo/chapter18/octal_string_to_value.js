/* Create a function octStr2Val(str) that accepts a string representing an
integer in octal notation, and returns the value. For this challenge, do not
use the (very convenient) parseInt function. */

// helper function to validate input ---NOT functional---
// function validator(input) {
//   // check for proper type:
//   if (typeof input != 'string') {
//     throw "input must be of type 'string'";
//   }
//   // check for '0o' prefix:
//
//   // check for non-numerical characters
//   // boolean variable true if non-numerical characters are found:
//   let containsNonNumericalCharacters = /[^0-9]+/.test(input);
//   if (containsNonNumericalCharacters) {
//     throw "input cannot contain non-numerical characters";
//   }
//   // check for invalid numbers
//   if (input.length > 1 && input[0] === "0") {
//     throw "numbers other than 0 cannot have a leftmost 0";
//   }
// }

// main function
function octalStringToDecimalValue(octalString) {
  // // run input through validator first:
  // validator(octalString);
  let octalStringCopy = octalString[0] === '-' ?
      octalString.slice(3) : octalString.slice(2);
  // following code will run if no exceptions are thrown:
  // decimalValue will be the decimal value of octalString
  // it will be the sum of decimal values of each octal digit
  let decimalValue = 0;
  for (let i = 0; i < octalStringCopy.length; i++) {
    // the decimal value for an octal digit can be expressed as follows:
    // extractedDecimalValue = octalDigit * (8 ^ octalDigitPosition)
    // where octalDigitPosition of 0 is the rightmost digit
    let octalDigitPosition = octalStringCopy.length - 1 - i;
    let extractedDecimalValue = octalStringCopy[i] *
        Math.pow(8, octalDigitPosition);
    decimalValue += extractedDecimalValue;
  }
  return decimalValue;
}


console.log(octalStringToDecimalValue("0o112"));
