function findNb(m) {
    var n = 0;
    while (m > 0){
        n++;
        if(m >= Math.pow(n, 3)){
            m -= Math.pow(n, 3);
        } else {
            return -1;
        }
    }
    return n;
}
console.log(findNb(4183059834009))

//best solution on codewars:
// function findNb(m) {
//   var n = 0
//   while (m > 0) m -= ++n**3
//   return m ? -1 : n
// }
