/* Create a function hexStr2Val(str) that accepts a string representing an int
in hexadecimal notation, and returns the value. For this challenge, do not use
parseInt. For example, given "0x1D2", return 466. */

function hexStringToDecimalVal(hexString) {
  let hexStringCopy = hexString[0] === '-' ?
      hexString.slice(3) : hexString.slice(2);
  // decimalValue will be the decimal value of hexString
  // it will be the sum of decimal values of each hex digit
  let decimalValue = 0;
  console.log(hexStringCopy);
  for (let i = 0; i < hexStringCopy.length; i++) {
    // the decimal value for an hex digit can be expressed as follows:
    // extractedDecimalValue = hexDigit * (16 ^ hexDigitPosition)
    // where hexDigitPosition of 0 is the rightmost digit
    let hexDigitPosition = hexStringCopy.length - 1 - i;
    let base = hexStringCopy[i];
    switch (base) {
      case 'A':
        base = 10;
        break;
      case 'B':
        base = 11;
        break;
      case 'C':
        base = 12;
        break;
      case 'D':
        base = 13;
        break;
      case 'E':
        base = 14;
        break;
      case 'F':
        base = 15;
        break;
    }
    let extractedDecimalValue = base *
        Math.pow(16, hexDigitPosition);
    decimalValue += extractedDecimalValue;
  }
  return decimalValue;
}

console.log(hexStringToDecimalVal("0x1D2"));
