/* Create a function dec2OctStr(value) that converts a number into a string
representing that number in octal notation. For this challenge, do not use the
(very convenient) toString function. */

function decimalToOctalString(decimalValue) {
  let octalString = "";
  while (decimalValue >= 1) {
    let extractedOctalValue = decimalValue % 8;
    octalString = extractedOctalValue + octalString;
    decimalValue = Math.floor(decimalValue / 8);
  }
  return octalString;
}

console.log(decimalToOctalString(72));
