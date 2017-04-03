function Node(val){
    this.val = val;
    this.next = null;
}

function SLL(){
    this.head = null;
    this.addFront = function(fval, ...values){
        if(!this.head){
            this.head = new Node(fval);
            var length = values.length;
            if(length > 0){
                for(var i = 0; i < length; i++){
                    var temp = new Node(values[i]);
                    temp.next = this.head;
                    this.head = temp;
                }
            }
        }
        else{
            var newNode = new Node(fval);
            newNode.next = this.head;
            this.head = newNode;
            var length = values.length;
            if(length > 0){
                for(var i = 0; i < length; i++){
                    var temp = new Node(values[i]);
                    temp.next = this.head;
                    this.head = temp;
                }
            }
        }
        return this;
    }
    this.printAll = function(){
        if(!this.head){
            return this;
        }
        else{
            var runner = this.head;
            while(runner){
                console.log(runner.val);
                runner = runner.next;
            }
            return this;
        }
    }
    this.removeFront = function(){
        if(!this.head){
            return null;
        }
        this.head = this.head.next;
        return this;
    }
    this.contains = function(val){
        if(!this.head){
            return false;
        }
        var runner = this.head;
        while(runner){
            if(runner.val == val){
                return true
            }
            runner = runner.next;
        }
        return false;
    }
    this.front = function(){
        if(!this.head){
            return null;
        }
        return this.head.val;
    }
    this.insertAtSecond = function(val){
        if(!this.head){
            this.head = new Node(val);
            return this;
        }
        var newNode = new Node(val);
        newNode.next = this.head.next;
        this.head.next = newNode;
        return this;
    }
    this.removeBack = function(num=1){
        if(typeof(num) === "number" && num % 1 == 0){
            if(!this.head || num === 0){
                return this;
            }
            else if(!this.head.next){
                this.head = null;
                return this;
            }
            var runner = this.head;
            while(runner.next.next){
                runner = runner.next;
            }
            runner.next = null;
            return this.removeBack(num-1);
        }
        else{
            console.log("invalid input!")
            return this;
        }
    }
    this.addBack = function(...values){
        var length = values.length;
        if(!this.head){
            this.head = new Node(values[0]);
            runner = this.head;
            for(var i = 1; i < length; i++){
                runner.next = new Node(values[i]);
                runner = runner.next;
            }
            return this;
        }
        var runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        for(var i = 0; i < length; i++){
            runner.next = new Node(values[i]);
            runner = runner.next;
        }
        return this;
    }
}

var myList = new SLL();
myList.addFront(1,2,3,4,5).addFront(6,7,8,9,10).addBack(11,12,13).printAll().removeBack().printAll()
