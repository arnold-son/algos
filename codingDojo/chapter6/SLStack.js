var SLQueue = require("./SLQ.js");

function SLStack(){
    function SLNode(val){
        this.val = val;
        this.next = null;
    }
    var top = null;
    this.display = function(){
        if(top === null){ console.log("Top -> [null]"); return this}
        var str = "Top -> "
        var runner = top;
        while(runner){
            str+= "[" + runner.val + "]" + "\n" + "       ";
            runner = runner.next;
        }
        console.log(str);
        return this;
    }
    this.push = function(val){
        if(!top){
            top = new SLNode(val)
        } else{
            var newNode = new SLNode(val);
            newNode.next = top;
            top = newNode;
        }
        return this;
    }
    this.pop = function(){
        if(!top){
            console.log("Empty stack. Nothing to pop.")
            return null;
        } else{
            var poppedValue = top.val;
            top = top.next;
            // console.log("Popped value: " + poppedValue)
            return poppedValue;
        }
    }
    this.top = function(){
        if(top === null){
            console.log("Empty stack.")
            return null;
        } else{
            console.log("Top value: " + top.val)
            return top.val;
        }
    }
    this.contains = function(val){
        if(!top){return false}
        var runner = top;
        while(runner){
            if(runner.val === val){
                return true;
            }
        }
        return false;
    }
    this.isEmpty = function(){
        return top === null;
    }
    this.size = function(){
        if(!top){return 0}
        var size = 0;
        var runner = top;
        while(runner){
            size++;
            runner = runner.next;
        }
        return size;
    }
    this.copy = function(){
        var storage = new SLQueue();
        var newCopy = new SLStack();
        while(!this.isEmpty()){
            newCopy.push(this.pop());
        }
        while(!newCopy.isEmpty()){
            var temp = newCopy.pop();
            this.push(temp);
            storage.enqueue(temp);
        }
        while(!storage.isEmpty()){
            newCopy.push(storage.dequeue());
        }
        return newCopy;
    }
    // this.compareStacks = function(secondStack){
    //     if(!top && !secondStack.top()){
    //         return true;
    //     } else if(!top || !secondStack.top()){
    //         return false;
    //     }
    //     var runner1 = top;
    //     var runner2 = secondStack.top();
    //     while(runner1 || runner2){
    //         if(!runner1 || runner2){
    //             return false
    //         } else if(runner1.val !== runner2.val){
    //             return false;
    //         }
    //         runner1 = runner1.next;
    //         runner2 = runner2.next;
    //     }
    //     return true;
    // }

}

function compareStacks(stack1,stack2){

    if(stack1.top() === null && stack2.top() === null){
        return true;
    }
    if(stack1.size() !== stack2.size()){
        return false;
    }
    var storage = new SLStack();
    var stacksAreEqual = true;
    while(stacksAreEqual && !stack1.isEmpty()){
        var stack1Value = stack1.pop();
        var stack2Value = stack2.pop();
        if(stack1Value !== stack2Value){
            stacksAreEqual = false;
        }
        storage.push(stack1Value).push(stack2Value);
    }
    while(!storage.isEmpty()){
        stack2.push(storage.pop());
        stack1.push(storage.pop());
    }

    stacksAreEqual ? console.log("The stacks are equal.") : console.log("The stacks are not equal.")

    return stacksAreEqual;
}
var one = new SLStack().push(1).push(2).push(3).display();
var copy = one.copy().display();
one.display();
copy.display();
compareStacks(one,copy)
