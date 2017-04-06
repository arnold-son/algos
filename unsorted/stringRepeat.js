//Write a function called repeatStr which repeats the given string string exactly n times.
//my solution:
function repeatStr (n, s) {
  var string = "";
  for(var i = 0; i < n; i++){
    string += s;
  }
  return string;
}
//best solution:
function repeatStr (n, s) {
  return s.repeat(n);
}
