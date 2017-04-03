//description: Print all integer multiples of 5, from 512 to 4096. Afterward,
//also log how many there were.

function printAndCount(){
    var count = 0;
    for(var i = 515; i <= 4096; i+=5){
        console.log(i);
        count++;
    }
    console.log(count);
}

printAndCount();
