//Create a function that accepts an array, and prints "yummy" each time one
//of the alues is equal to "food". If no array elements are "food", then print
//"I'm hungry" once.

function alwaysHungry(arr){
    var isFood = false;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            if(!isFood){
                isFood = true;
            }
        }
    }
    if(!isFood){
        console.log("I'm hungry");
    }
}

alwaysHungry(["food","food","food","food","food","food","food"])
alwaysHungry(["not food","not food","not food","not food","not food"])
