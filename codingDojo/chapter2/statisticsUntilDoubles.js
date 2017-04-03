//Here's another game for our New Year's Eve party. Implement a '20-sided die'
//that randomly returns integers between 1 and 20 inclusive. ROll these,
//tracking statistics until you get a value twice in a row.
//Display number of rolls, min, max, and average.

function rollD20(){
    return Math.floor(Math.random()*20)+1;
}
function statisticsUntilDoubles(){
    var prevRoll = rollD20();
    var min = prevRoll;
    var max = prevRoll;
    var sum = prevRoll;
    var count = 1;
    var currentRoll;
    while(prevRoll != currentRoll){
        currentRoll = rollD20();
        sum += currentRoll;
        if(min > currentRoll){
            min = currentRoll;
        }
        if(max < currentRoll){
            max = currentRoll;
        }
        count++;
    }
    console.log("number of rolls: "+count,"min: "+min,"max: "+max,"average: "+(sum/count));
}

statisticsUntilDoubles();
