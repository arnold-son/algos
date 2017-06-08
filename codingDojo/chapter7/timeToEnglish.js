//You are given an integer representing the number of minutes that have elapsed
//since midnight. You should return a string representing the current time, in
//traditional spoken convention. Use numerals, except specifically the following
//words - midnight, noon, past, til, half, quarter.
//Examples:
//If given 30, return "half past midnight".
//If given 75, return "quarter past 1 am".
//If given 710, return "10 til noon".
//If given 1000, return "20 til 5 pm".

//1: put into 24-hour time time %= 24*60
//2: round to nearest hour and store in variable "hour"
//3: find time(minutes) - timeRounded(minutes) and store in variable "minute"
//4: build string "English" with Math.abs(minute) + "past"/"before" + hour
//5: replace parts of English: hour 0, 24 => midnight, 12 => noon
//minute 15 => quarter, 30 => half

function timeToEnglish(int){
    //make int into 24-hour time
    int %= (24*60);
    //get nearest hour
    //note: .5 hours get rounded down
    var hour = int % 30 === 0 ? Math.floor(int/60) : Math.round(int/60);
    //get minutes to nearest hour
    var minute = int - (hour * 60);
    //replace noon/midnight hours to strings
    if(hour === 0 || hour === 24){
        hour = "midnight";
    } else if(hour === 12){
        hour = "noon";
    //add AM/PM to hours
    } else{
        hour = hour < 12 ? hour + " AM" : hour - 12 + " PM";
    }
    //replace quarter/half hours to strings
    if(minute === 15 || minute === -15){
        minute = minute > 0 ? "quarter past " : "quarter til ";
    }
    else if(minute === 30 || minute === -30){
        minute = minute > 0 ? "half past " : "half til ";
    //add " past " or " til " to "minute"
    } else{
        minute = Math.abs(minute) + (minute > 0 ? " past " : " til ");
    }
    return minute + hour;
}
console.log(timeToEnglish(30))
console.log(timeToEnglish(75))
console.log(timeToEnglish(710))
console.log(timeToEnglish(1000))
