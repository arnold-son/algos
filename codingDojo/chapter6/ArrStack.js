function ArrStack(){
    var stack = [];
    this.display = function(){
        var str = "Top -> ";
        for(var i = stack.length-1; i >= 0; i--){
            str += "[" + stack[i] + "]" + "\n" + "       ";
        }
        console.log(str);
    }
    this.push = function(val){
        stack.push(val);
        return this;
    }
    this.pop = function(){
        return stack.pop();
    }
    this.top = function(){
        return stack[stack.length-1];
    }
    this.contains = function(val){
        for(var i = 0; i < stack.length; i++){
            if(stack[i] === val){
                return true;
            }
        }
        return false;
    }
    this.isEmpty = function(){
        if(stack.length < 1){
            return true;
        } else{
            return false;
        }
    }
    this.size = function(){
        return stack.length;
    }
}

var myArrStack = new ArrStack();
myArrStack.push(1).push(2).push(3).push(4).push(5).display();
console.log(myArrStack.pop());
myArrStack.display();
console.log("Does it contain 1? " + myArrStack.contains(1), "\nDoes it contain 6? " + myArrStack.contains(6), "\nIs it empty? " + myArrStack.isEmpty())
console.log("How big is the stack? " + myArrStack.size())
