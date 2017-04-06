//my solution:
function duplicateCount(text){
    var dict = {}
    var dupes = {}
    for(var i = 0; i < text.length; i++){
        if(!dict[text[i].toUpperCase()]){
            dict[text[i].toUpperCase()]=true
        }
        else{
            dupes[text[i].toUpperCase()]=true
        }
    }
    return Object.keys(dupes).length
}
//below: best solution
// function duplicateCount(text){
//   return text.toLowerCase().split('').filter(function(val, i, arr){console.log(arr.indexOf(val),i,arr.lastIndexOf(val));
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;
// }
console.log(duplicateCount("Indivisibility"))
