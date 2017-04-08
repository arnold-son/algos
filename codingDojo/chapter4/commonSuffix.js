//Lance is writing his opus: Epitome, an epic tome of beat poetry. Always ready
//for a good rhyme, he constantly seeks works that end with the same letters.
//Write a function that, when given a word array, returns the largest suffix
//(word-end) common to all words in the array. For inputs
//["deforestation", "citation", "conviction", "incarceration"], return "tion"
//(not all that creative a rhyming point). If it is ["nice", "ice", "baby"],
//return "", because that's just ... not.

function commonSuffix(arr){
    //set common suffix to first element in the array
    var common = arr[0];
    //iterate through elements index 2 to end in the array
    for(var i = 1; i < arr.length; i++){
        //while loop to compare characters from the end of common and arr[i], moving to j'th character from the end each time
        var j = 1;
        while(common[common.length-j]){
            //if either a) common and arr[i] have a mismatching character at index:length-j
            //-OR- b) arr[i] is out of index at index:length-j
            //common is updated to characters between index:length-j+1 to length-1 (inclusive)
            if(common[common.length-j] !== arr[i][arr[i].length-j]){
                common = common.slice(common.length-j+1);
            }
            j++;
        }
    }
    return common;
}

console.log(commonSuffix(["deforestation", "citation", "conviction", "incarceration"]))
console.log(commonSuffix(["nice", "ice", "baby"]))
