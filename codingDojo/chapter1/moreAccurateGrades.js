//For an additional challenge, add '-' signs to scores in the bottom two
//percent of A, B, C and D scores, and "+" signs to the top two percent of B,
//C, and D scores (sorry, Mr. Cerise never gives an A+). Given 88, console.log
//"Score: 88. Grade: B+". Given 61. log "Score: 61. Grade D-".

function moreAccurateGrades(score){
    var mod = "";
    if(score % 10 < 3){
        mod = "-";
    }
    else if(score % 10 > 7){
        mod = "+";
    }

    if(score < 60){
        console.log("Score: " + score + ". Grade: F")
    }
    else if(score < 70){
        console.log("Score: " + score + ". Grade: D" + mod)
    }
    else if(score < 80){
        console.log("Score: " + score + ". Grade: C" + mod)
    }
    else if(score < 90){
        console.log("Score: " + score + ". Grade: B" + mod)
    }
    else{
        console.log("Score: " + score + ". Grade: A")
    }
}

moreAccurateGrades(88);
moreAccurateGrades(61);
