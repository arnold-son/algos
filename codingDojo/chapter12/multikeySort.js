//For this challenge you will sort an array, however the items in the array are
//not simple numbers. Given an array of objects, where each object contains a
//.firstName and a .lastName, sort the array by both last name (primary) and
//first name (secondary). Daniel Ainsley should be sorted before Aaron Carnevale,
//and Aaron Carnevale should be sorted before his brother Giorgio Carnevale.

function multikeySort(arr){
    var swapped = true;
    var end = arr.length - 1
    while(swapped){
        swapped = false;
        for(var i = 0; i < end; i++){
            if((arr[i].lastName > arr[i+1].lastName) || (arr[i].lastName === arr[i+1].lastName && arr[i].firstName > arr[i+1].firstName)){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        end--;
    }
    return arr;
}

var test = [{firstName: "Daniel", lastName: "Ainsley"}, {firstName: "Giorgio", lastName: "Carnevale"}, {firstName: "Aaron", lastName: "Carnevale"}, {firstName: "Arnold", lastName: "Son"}, {firstName: "Joey", lastName: "Zoland"}, {firstName: "James", lastName: "Ye"} ]

console.log(multikeySort(test))
