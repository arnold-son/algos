//1) Create function rollOne() to return a randomly selected integer between 1
//and 6 (inclusive).
function rollOne(){
    return Math.floor(Math.random()*6)+1
}
// console.log(rollOne());

//2) Second, create a function playFives(num), which should call rollOne()
//multiple times - "num" times, in fact, where "num" is input parameter to
//playFives(num). Each time, it should print the value rollOne() returns, and
//if that return value is 5, also print "That's good luck!"
function playFives(num){
    for(var i = 0; i < num; i++){
        var roll = rollOne();
        console.log(roll);
        if(roll == 5){
            console.log("That's good luck!");
        }
    }
}
// playFives(123);

//3) Third, create a new function named playStatistics(), which should call rollOne()
//eight times (but not print anything after each call). After the last of these
//eight calls, it should print out the lowest and highest values that it received from
//rollOne, among those eight calls.
function playStatistics(){
    var firstRoll = rollOne();
    var min = firstRoll;
    var max = firstRoll;
    for(var i = 0; i < 7; i++){
        var roll = rollOne();
        if(roll < min){
            min = roll;
        }
        if(roll > max){
            max = roll;
        }
    }
    console.log("min: "+min,"max: "+max);
}
// playStatistics();

//4) Fourth, make a copy of playStatistics and add code to make playStatistics2(),
//so that at the end (in addition to printing high/low rolls), it also prints
//the total sum of all eight rolls.

function playStatistics2(){
    var firstRoll = rollOne();
    var min = firstRoll;
    var max = firstRoll;
    var sum = firstRoll;
    for(var i = 0; i < 7; i++){
        var roll = rollOne();
        sum += roll;
        if(roll < min){
            min = roll;
        }
        if(roll > max){
            max = roll;
        }
    }
    console.log("min: "+min,"max: "+max,"sum: "+sum);
}
// playStatistics2();

//5) Fifth, make a copy of playStatistics2 and add code to it to make playStatistics3(num),
//so that it will roll as many times as you want, instead of always doing this eight times.
function playStatistics3(num){
    var firstRoll = rollOne();
    var min = firstRoll;
    var max = firstRoll;
    var sum = firstRoll;
    for(var i = 1; i < num; i++){
        var roll = rollOne();
        sum += roll;
        if(roll < min){
            min = roll;
        }
        if(roll > max){
            max = roll;
        }
    }
    console.log("min: "+min,"max: "+max,"sum: "+sum);
}
// playStatistics3(123);

//6) Finally, make a copy of playStatistics3 and change it to create
//playStatistics4(num), so that at the end instead of the total sum, it prints
//the average roll.
function playStatistics4(num){
    var firstRoll = rollOne();
    var min = firstRoll;
    var max = firstRoll;
    var sum = firstRoll;
    for(var i = 1; i < num; i++){
        var roll = rollOne();
        sum += roll;
        if(roll < min){
            min = roll;
        }
        if(roll > max){
            max = roll;
        }
    }
    console.log("min: "+min,"max: "+max,"average: "+(sum/num));
}
// playStatistics4(123);
