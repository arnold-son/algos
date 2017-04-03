//Kyle (smarter than Kenny) notes that the chance of one disaster is totally
//unrelated to the chance of another. Change whatHappensToday() function to
//create whatReallyHappensToday(). In this new function test for each disaster
//independently, instead of assuming exactly one disaster will happen. In
//other words, with this new function, all five might occur today - or none.
//Maybe Kenny will survive!

function whatReallyHappensToday(){
    var volcano = Math.floor(Math.random()*100)+1;
    var tsunami = Math.floor(Math.random()*100)+1;
    var earthquake = Math.floor(Math.random()*100)+1;
    var blizzard = Math.floor(Math.random()*100)+1;
    var meteor = Math.floor(Math.random()*100)+1;
    if(volcano <= 10){
        console.log("Volcano");
    }
    if(tsunami <= 15){
        console.log("Tsunami");
    }
    if(earthquake <= 20){
        console.log("Earthquake");
    }
    if(blizzard <= 25){
        console.log("Blizzard");
    }
    if(meteor <= 30){
        console.log("Meteor strike");
    }
}

whatReallyHappensToday();
