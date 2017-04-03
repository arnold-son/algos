//Add odd integers from -300,000 to 300,000, and console.log the final sum. Is
//there a shortcut?

function whoaThatSuckersHuge(){
    var sum = 0;
    for(var i = -299999; i <= 299999; i+=2){
        sum += i;
    }
    console.log(sum);
}

whoaThatSuckersHuge();
