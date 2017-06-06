//You will be given a numerical array that has first been sorted,
//then rotated by an unknown amount. Find and return the minimum
//value in that array. Don't use built-in functions (surprise!).
//Given the input array
//["Gigli", "Jay is cool", "Mavis","Phoebe","Thurber","Anna","Celeste","Elon"],
//you should return "Anna".
//Remember, do not linearly iterate the array!

//Current solution does not work with duplicate values.
function minOfSortedRotated(arr){
    if(arr[0] <= arr[arr.length-1]){
        return arr[0]
    }
    if(arr.length == 2){
        return (arr[0] < arr[1]) ? arr[0] : arr[1]
    }
    var mid = Math.floor(arr.length/2)
    if(arr[mid] > arr[0]){
        return minOfSortedRotated(arr.slice(mid))
    }
    if(arr[mid] < arr[0]){
        return minOfSortedRotated(arr.slice(0,mid+1))
    }
}

console.log(minOfSortedRotated(["Gigli", "Jay is cool", "Mavis","Phoebe","Thurber","Anna","Celeste","Elon"]))
console.log(minOfSortedRotated([1,2,3,4,5]))
console.log(minOfSortedRotated([2,3,4,5,1]))
console.log(minOfSortedRotated([3,4,5,1,2]))
console.log(minOfSortedRotated([4,5,6,7,8,9,1,2,3]))
