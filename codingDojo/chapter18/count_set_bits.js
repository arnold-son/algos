/* Given integer, return how many bits are set to 1. For an input of 1023
(0x3FF), return 10. Given the value 8192 (0x2000), return 1.
Second: can you make it O(s), where s is the number of set bits? */

function countSetBits(int) {
  // variable to count number of set bits:
  let count = 0;
  while (int > 0) {
    // increment count before unsetting rightmost set bit:
    count++;
    // bitmask of (int - 1) toggles all bits from the rightmost set bit,
    // including the rightmost set bit
    // int & (int - 1) unsets the rightmost set bit:
    int &= int - 1;
  }
  //return count
  return count;
}

console.log(countSetBits(1023));
console.log(countSetBits(8192));
