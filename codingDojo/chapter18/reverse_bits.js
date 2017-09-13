/* Given a 32-bit unsigned integer, reverse its bits and return this value.
If you are given the value 0b01100110011001101111000011110000, then your
function should return the value 0b00001111000011110110011001100110. */

function reverseBits(int) {
  let copy = int;
  let reversedInt = 0;
  for (var i = 0; i < 32; i++) {
    reversedInt += copy & 1;
    copy >>>= 1;
    if (i < 31) {
      reversedInt <<= 1;
    }
  }
  return reversedInt;
}

console.log(reverseBits(0b01100110011001101111000011110000).toString(2));
