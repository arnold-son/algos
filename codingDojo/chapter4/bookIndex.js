//Martin is writing his opus: a book of algorithm challenges, set as lyrics to a
//suite of acappella fugues. Some of those fugueing challenges are less popular
//than others, so he needs an index. Given a sorted array of pages where a term
//appears, produce an index string. Consecutive pages should form ranges
//separated by a hyphen. For [1,13,14,15,37,38,70], return string "1, 13-15,
//37-38, 70". Take care to get all the commas and spaces correct: Martin is
//palpably persnickety about patchy punctuation.

function bookIndex(arr){
    var start;
    var end;
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i]+1 === arr[i+1]){
            if(!start){start = arr[i]}
            end = arr[i+1];
            if(arr[i+2] !== end+1){newArr.push(start + "-" + end);start = null;end = null;i++}
            continue;
        }
        newArr.push(arr[i]);
    }
    return newArr.join(", ");
}

console.log(bookIndex([1,13,14,15,37,38,70]))
