/* Create a function dec2HexStr(value) that converts a number into a string
representing that number in hexadecimal notation. For this challenge, do not
use the toString function. For example, given the value 108, the function
should return "0x6C". */

function decimalToHexadecimalString(decimalValue) {
  if (decimalValue === 0) return "0x0";
  let isNegative = decimalValue < 0;
  let hexadecimalString = "";
  let remaining = Math.abs(decimalValue);
  while (remaining > 0) {
    let extractedHexValue = remaining % 16;
    hexadecimalString = extractedHexValue + hexadecimalString;
    remaining = Math.floor(remaining / 16);
  }
  hexadecimalString = "0x" + hexadecimalString;
  if (isNegative) {
    hexadecimalString = "-" + hexadecimalString;
  }
  return hexadecimalString;
}

console.log(decimalToHexadecimalString(-1812));
