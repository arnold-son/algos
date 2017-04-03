//If 2 given numbers represent your birth month and day in either order, log
//"How did you know?", else log "Just another day..."

function youSayItsYourBirthday(num1,num2,bmonth,bday){
    if(num1 == bmonth && num2 == bday || num1 == bday && num2 == bmonth){
        console.log("How did you know?");
    }
    else{
        console.log("Just another day");
    }
}

youSayItsYourBirthday(3,14,3,14);
youSayItsYourBirthday(14,3,3,14);
youSayItsYourBirthday(1,2,3,14);
