//Return to your previous clockHandAngles solution. Allow fractional values for
//input seconds, but change your implementation to print only integer values for
//angles (in degrees) of the various hands.
function clockHandAnglesRevisited(seconds){
    var hourHand = Math.round(seconds / 43200 % 1 * 360);
    var minuteHand = Math.round(seconds / 3600 % 1 * 360);
    var secondHand = Math.round(seconds / 60 % 1 * 360);
    console.log("Hour hand: " + hourHand + " degs.")
    console.log("Minute hand: " + minuteHand + " degs.")
    console.log("Second hand: " + secondHand + " degs.")
}
clockHandAnglesRevisited(119730);
