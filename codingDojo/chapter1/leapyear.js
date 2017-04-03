//Write a function that determines whether a given year is a leap year. If a
//year is divisible by four, it is a leap year, unless it is divisible by 100.
//However, if it is divisible by 400, then it is.

function leapyear(year){
    var isLeapyear = false;
    if(year % 4 == 0){
        isLeapyear = true;
        if(year % 100 == 0){
            isLeapyear = false;
            if(year % 400 == 0){
                isLeapyear = true;
            }
        }
    }
    return isLeapyear;
}

function leapyear2(year){
    if(year % 400 == 0){
        return true;
    }
    else if(year % 100 == 0){
        return false;
    }
    else if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}

var leapyears = [1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020]
for(var i = 0; i < leapyears.length; i++){
    console.log(leapyear(leapyears[i]));
}
