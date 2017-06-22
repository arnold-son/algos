function uniqueWords(str){
    var word = "";
    var words = [];
    var wordCount = {};
    var uniques = "";
    for(var i = 0; i <= str.length; i++){
        if((!str[i] || str[i] === " ") && word.length > 0){
            if(!wordCount[word]){
                wordCount[word] = 1;
                words.push(word);
            } else {
                wordCount[word]++;
            }
            word = "";
        } else {
            word += str[i];
        }
    }
    for(var i = 0; i < words.length; i++){
        if(wordCount[words[i]] === 1){
            if(uniques.length > 0){
                uniques += " ";
            }
            uniques += words[i];
        }
    }
    return uniques
}

var test = "Sing! Sing a song; sing out loud; sing out strong."

console.log(uniqueWords(test))
