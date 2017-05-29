function vertMirror(strng) {
    strng = strng.split("\n")
    strng.forEach(function(currentValue, index, array){array[index] = array[index].split("").reverse().join("")})
    return strng.join("\n");
}
function horMirror(strng) {
    return strng.split("\n").reverse().join("\n")
}
function oper(fct, s) {
    s = fct(s);
    return s;
}
