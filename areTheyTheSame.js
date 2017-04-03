function comp(array1, array2){
    if(array1 == null||array2 == null){
        return false;
    }
    else if(array1.length != array2.length){
        return false;
    }
    else if(array1 == [] || array2 == []){
        return false;
    }
    else{
        var dict = {};
        for(var i = 0; i < array1.length; i++){
            dict[array1[i]*array1[i]] = true;
        }
        for(var i = 0; i < array2.length; i++){
            if(!dict[array2[i]]){
                return false;
            }
        }
        return true;
    }
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log(comp(a1,a2));
//solution failed for arrays with non-unique values
//below: top posted solution
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false; //null case
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b); //sorts numbers in ascending order
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
  //array1.map(v => v* v) returns new array of array1 squares
  //.every((v, i) => v == array2[i]) is true if all pass as true (parameters: value, index(optional), array(optional))
}
