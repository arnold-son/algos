//constructor for SLL
function SLL(){
    this.head = null;
    this.addFront = function(...vals){
        var start = vals.length-1;
        if(!this.head){this.head = new SLNode(vals[start]);start--}
        for(var i = start; i >= 0; i--){
            var temp = new SLNode(vals[i]);
            temp.next = this.head;
            this.head = temp;
        }
        return this;
    }
    this.removeFront = function(){
        if(!this.head){console.log("Nothing to remove");return null}
        this.head = this.head.next;
        return this
    }
    this.contains = function(val){
        if(!this.head){console.log("Empty list");return false}
        runner = this.head;
        while(runner){
            if(runner.val === val){return true}
            runner = runner.next;
        }
        return false;
    }
    this.front = function(){
        if(!this.head){console.log("Empty list");return null}
        return this.head.val;
    }
    this.length = function(){
        if(!this.head){console.log("Empty list");return 0}
        runner = this.head;
        count = 0;
        while(runner){count++;runner = runner.next;}
        return count;
    }
    this.max = function(){
        if(!this.head){console.log("Empty list");return null}
        var max = this.head.val;
        runner = this.head.next;
        while(runner){
            if(runner.val > max){max = runner.val}
            runner = runner.next;
        }
        return max;
    }
    this.min = function(){
        if(!this.head){console.log("Empty list");return null}
        var min = this.head.val;
        runner = this.head.next;
        while(runner){
            if(runner.val < min){min = runner.val}
            runner = runner.next;
        }
        return min;
    }
    this.average = function(){
        if(!this.head){console.log("Empty list");return null}
        var sum = this.head.val;
        runner = this.head.next;
        while(runner){
            sum+=runner.val;
            runner = runner.next;
        }
        return sum/this.length()
    }
    this.display = function(){
        if(!this.head){console.log("There is nothing here");return this}
        runner = this.head;
        var string = "";
        while(runner){
            string+=runner.val;
            if(runner.next){string+=", "}
            runner = runner.next;
        }
        console.log(string);
        return this;
    }
    this.reverse = function(){
        var passenger = this.head;
        while(passenger.next){
            var temp = this.head;
            this.head = passenger.next;
            passenger.next = passenger.next.next;
            this.head.next = temp;
        }
        return this;
    }
}
//constructor for SLNode
function SLNode(val){
    this.val = val;
    this.next = null;
}

var myList = new SLL();
myList.addFront(1,2,3,4,5).display()
myList.reverse().display();
