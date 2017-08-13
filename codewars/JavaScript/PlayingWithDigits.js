function digPow(n, p){
  let sum = 0;
  let position = 1;
  function nthDigitFromLeft(num,n){
    if (n < 1) return null;
    let divisorExponent = Math.floor(Math.log10(num)) - (n-1);
    if (divisorExponent < 0) return null;
    let divisor = Math.pow(10,divisorExponent);
    return Math.floor(num / divisor) % 10;
  }
  let extractedNum = nthDigitFromLeft(n,position++);
  while (extractedNum !== null) {
    sum += Math.pow(extractedNum,p++);
    extractedNum = nthDigitFromLeft(n,position++);
  }
  if (sum < n) return -1;
  let k = sum / n;
  return sum % n === 0 ? k:-1;
}

console.log(digPow(89, 1));
