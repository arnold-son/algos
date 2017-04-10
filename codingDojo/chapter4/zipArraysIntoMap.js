//Associative arrays are sometimes called maps because a key (string) maps to a
//value. Given two arrays, create an associative array (map) containing keys of
//the first, and values of the second. For arr1 = ["abc",3,"yo"] and
//arr2 = [42,"wassup",true], return {"abc":42,3:"wassup","yo"true}.

function arraysToMap(arr1,arr2){
    var shorter = arr1.length;
    if(arr1.length > arr2.length){shorter = arr2.length}
    var map = {}
    for(var i = 0; i < shorter; i++){
        map[arr1[i]] = arr2[i];
    }
    return map;
}

console.log(arraysToMap(["abc",3,"yo"],[42,"wassup",true]))
