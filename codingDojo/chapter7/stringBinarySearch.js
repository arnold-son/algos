//You will be given a very long string and a single character. Return whether
//that character is present in the string. Note: the characters in the string
//have been arranged so that the charCodeAt() values for each character are
//monotonically ascending from the beginning of the string to the back. Use the
//fact that the string is effectively sorted. Don't use built-in functions.
//Note: characters may not be exactly as you might have considered 'alphabetized',
//but char.charCodeAt() works well.
//Examples:
//stringBinarySearch(" &-0379DEFXZ[abcz|","6") === false
//stringBinarySearch(" &-0379DEFXZ[abcz|","c") === true

function stringBinarySearch(str,char){
    var mid = Math.floor(str.length/2)
    if(str[mid].charCodeAt() === char.charCodeAt()){
        return true
    }
    if(str.length === 2){
        return str[0].charCodeAt() === char.charCodeAt();
    }
    if(str[mid].charCodeAt() > char.charCodeAt()){
        return stringBinarySearch(str.slice(0,mid),char)
    }
    if(str[mid].charCodeAt() < char.charCodeAt()){
        return stringBinarySearch(str.slice(mid+1),char)
    }
}

console.log(stringBinarySearch(" &-0379DEFXZ[abcz|","6"))
console.log(stringBinarySearch(" &-0379DEFXZ[abcz|","c"))
