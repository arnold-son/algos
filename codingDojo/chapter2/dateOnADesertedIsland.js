//After a particularly fabulous New Year's Eve party to end 2016, Eduardo wakes
//to find himself stranded on a deserted island. He misses his home in Burbank,
//but at least now he can spend plenty of time outdoors - and you can't beat
//the commute! To pass the time until he is rescued, he counts sunrises.
//
//1) Help Eduardo track what day of the week it is. Create a weekdayName(weekdayNum)
//function that, given a number between 1 and 7, will console.log a string containing
//the day of the week for that number (given 1, log "Sunday"). Use a SWITCH statement.

function weekdayName(weekdayNum){
    switch(weekdayNum){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("invalid weekdayNum")
    }
}

// weekdayName(1);

//2) Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to 365.
//Return weekday as before, given number of days total. "Sunday" still corresponds to 1.

function weekdayName2(weekdayNum){
    if(weekdayNum < 1){console.log("invalid weekdayNum");return}
    else if(weekdayNum >= 7){weekdayNum %= 7}
    switch(weekdayNum){
        case 1:
            console.log("Sunday");
            return "Sunday"
        case 2:
            console.log("Monday");
            return "Monday"
        case 3:
            console.log("Tuesday");
            return "Tuesday"
        case 4:
            console.log("Wednesday");
            return "Wednesday"
        case 5:
            console.log("Thursday");
            return "Thursday"
        case 6:
            console.log("Friday");
            return "Friday"
        case 0:
            console.log("Saturday");
            return "Saturday"
        default:
            console.log("invalid weekdayNum")
    }
}

// weekdayName2(14);

//3) Create a new function someDays() that calls weekDayName2() seventeen times,
//with randomly generated integers as high as 365. Log each result string. If it
//is a weekday, add the phrase "Work hard!", and if it is a weekend day, add
//"Enjoy your day off!"

function someDays(){
    for(var i = 0; i < 17; i++){
        var random = Math.floor(Math.random()*365)+1
        weekdayName2(random)
        if(random % 7 == 0 || random % 7 == 1){
            console.log("Enjoy your day off!");
        }
        else{
            console.log("Work hard!")
        }
    }
}

// someDays();

//4) Build function monthName(monthNum) that, given a number from 1 to 12,
//returns a string containing month for that number ("May" corresponds to 5).
//Use an array, without loops.

function monthName(monthNum){
    switch(monthNum){
        case 1:
            return "January"
        case 2:
            return "February"
        case 3:
            return "March"
        case 4:
            return "April"
        case 5:
            return "May"
        case 6:
            return "June"
        case 7:
            return "July"
        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"
        case 11:
            return "November"
        case 12:
            return "December"
        default:
            console.log("invalid input")
            return false
    }
}

// console.log(monthName(1));
// console.log(monthName(3));
// console.log(monthName(5));
// console.log(monthName(134));

//5) Now expand monthName() to create monthToDays(monthNum), returning the number
//of days in that month, in the year 2017. Hint: use a SWITCH statement for the
//days in each month.

function monthToDays(monthNum){
    switch(monthNum){
        case 1:
            return "January - 31 days"
        case 2:
            return "February - 28 days"
        case 3:
            return "March - 31 days"
        case 4:
            return "April - 30 days"
        case 5:
            return "May - 31 days"
        case 6:
            return "June - 30 days"
        case 7:
            return "July - 31 days"
        case 8:
            return "August - 31 days"
        case 9:
            return "September - 30 days"
        case 10:
            return "October - 31 days"
        case 11:
            return "November - 30 days"
        case 12:
            return "December - 31 days"
        default:
            console.log("invalid input")
            return false
    }
}

// console.log(monthToDays(1));
// console.log(monthToDays(3));
// console.log(monthToDays(5));
// console.log(monthToDays(134));

//6) Despite using his ember expertise to create a glowing SOS visible from space,
//the days go by and sadly Eduardo is still not rescued. Is it spring yet? It
//might as well be. Build on monthName() to create dayToMonth(dayNum). If given
//a day number since the year began, return the current month (assume it is not
//a Leap Year). Given 75, return "March".

function dayToMonth(dayNum){
    if(dayNum < 1 || dayNum > 365){
        console.log("invalid input");
        return false;
    }
    else if(dayNum < 32){return "January " + dayNum}
    else if(dayNum < 60){return "February " + (dayNum-31)}
    else if(dayNum < 91){return "March " + (dayNum-59)}
    else if(dayNum < 121){return "April " + (dayNum-90)}
    else if(dayNum < 152){return "May " + (dayNum-120)}
    else if(dayNum < 182){return "June " + (dayNum-151)}
    else if(dayNum < 213){return "July " + (dayNum-181)}
    else if(dayNum < 244){return "August " + (dayNum-212)}
    else if(dayNum < 274){return "September " + (dayNum-243)}
    else if(dayNum < 305){return "October " + (dayNum-273)}
    else if(dayNum < 335){return "November " + (dayNum-304)}
    else if(dayNum < 366){return "December " + (dayNum-334)}
}
function dayToMonthLeap(dayNum){
    if(dayNum < 1 || dayNum > 366){
        console.log("invalid input");
        return false;
    }
    else if(dayNum < 32){return "January " + dayNum}
    else if(dayNum < 61){return "February " + (dayNum-31)}
    else if(dayNum < 92){return "March " + (dayNum-60)}
    else if(dayNum < 122){return "April " + (dayNum-91)}
    else if(dayNum < 153){return "May " + (dayNum-121)}
    else if(dayNum < 183){return "June " + (dayNum-152)}
    else if(dayNum < 214){return "July " + (dayNum-182)}
    else if(dayNum < 245){return "August " + (dayNum-213)}
    else if(dayNum < 275){return "September " + (dayNum-244)}
    else if(dayNum < 306){return "October " + (dayNum-274)}
    else if(dayNum < 336){return "November " + (dayNum-305)}
    else if(dayNum < 367){return "December " + (dayNum-335)}
}
// console.log(dayToMonth(75));

//7) Eduardo builds a Dojo bootcamp on the island. Initially his students only
//find Ninja Gold in caves, but eventually even his tree sloths can write code
//quickly! Dojo classes meet Monday through Friday, so let's reincorporate
//weekday to our calculations. Construct fullDate(dayNum) to accept number of
//days so far in 2017, and return a full date string. He hardly remembers that
//fateful New Year's Eve party, but he knows it was a Saturday. Given 142,
//return "Monday, May 22, 2017"

function fullDate(dayNum){
    return weekdayName2(dayNum) + ", " + dayToMonth(dayNum) + ", 2017";
}

// console.log(fullDate(142));

//8) Time flies when you're at a Dojo - months in fact. Build fullDate2(dayNum)
//that will be given a 4-digit integer: the days that have passed since December
//31, 2016. This number can stretch into future years! You can assume that any
//year number divisible by four is a leap year and has a 29-day February. Given
//8475, return "Thursday, March 15, 2040".

function fullDate2(dayNum){
    if(!(dayNum < 10000)){
        console.log("dayNum must be less than 10000")
        return false;
    }
    var year = 2017;
    if(dayNum > 1461){
        year += Math.trunc((dayNum-1)/1461)*4;
        dayNum = ((dayNum-1) % 1461)+1;
    }
    //case of a leap year:
    if(dayNum > 1095){
        year += Math.trunc((dayNum-1)/1095)*3;
        dayNum = ((dayNum-1) % 1095)+1;
        return weekdayName2(dayNum) + ", " + dayToMonthLeap(dayNum) + ", " + year;

    }
    //normal years:
    else{
        year += Math.trunc((dayNum-1)/365)
        dayNum = ((dayNum-1) % 365)+1;
        return weekdayName2(dayNum) + ", " + dayToMonth(dayNum) + ", " + year;
    }
}

console.log(fullDate2(8475));

//9) Eduardo hacks the Google Maps API and adds this long-forgotten island back
//onto the map. Soon he is rescued! News of his Hemingway-like stoicism make
//him famous for centuries. Build fullDate3(dayNum) to handle days up to 140,000!
//Note: years 2100, 2200, and 2300 are not leap years(although 2400 is).
//Given 139947, return "Tuesday, February 29, 2400".
