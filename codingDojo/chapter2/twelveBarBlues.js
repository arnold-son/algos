//Write a function that console.logs the number 1, then "chick", then "boom",
//then "chick", then 2, then "chick", "boom", "chick" - continuing the same cycle
//for each number up to (including) 12.

function twelveBarBlues(){
    var string = "chick\nboom\nchick";
    for(var i = 1; i <= 12; i++){
        console.log(i + "\n" + string);
    }
}

twelveBarBlues();
