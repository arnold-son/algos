//Create strSubsets(str). Return an array with every possible in-order character
//subset of str. The resultant array itself need not be in any specific order -
//it is the subset of letters in each string that must be in the same order as
//they were in the original string. Given "abc", return an array that includes
//["", "c", "b", "bc", "a", "ac", "ab", "abc"] (in any order).

function strSubsets(str)
{
    var arr = [""];
    for(var i = 0; i < str.length; i++)
    {
        arr.push(str[i]);
        subsetHelper(str[i],str.slice(i+1),arr)
    }
    return arr;
}

function subsetHelper(str1,str2,arr)
{
    for(var i = 0; i < str2.length; i++)
    {
        arr.push(str1+str2[i])
        if(i+1 < str2.length)
        {
            subsetHelper(str1+str2[i],str2.slice(i+1),arr)
        }
    }
}

console.log(strSubsets("abcd"))
