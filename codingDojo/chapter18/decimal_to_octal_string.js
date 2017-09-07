/* Create a function dec2OctStr(value) that converts a number into a string
representing that number in octal notation. For this challenge, do not use the
(very convenient) toString function. */

function decimalToOctalString(decimalValue) {
  if (decimalValue === 0) return "0o0";
  let isNegative = decimalValue < 0;
  let octalString = "";
  let remaining = Math.abs(decimalValue);
  while (remaining > 0) {
    let extractedOctalValue = remaining % 8;
    octalString = extractedOctalValue + octalString;
    remaining = Math.floor(remaining / 8);
  }
  octalString = "0o" + octalString;
  if (isNegative) {
    octalString = "-" + octalString;
  }
  return octalString;
}

console.log(decimalToOctalString(-172));
