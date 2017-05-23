module.exports = function(SLL, SLNode){
    SLNode.prototype.display = function(){
        var runner = this;
        var string = ""
        while(runner){
            string+="["+runner.val+"]";
            if(runner.next){string+=" -> "}
            runner = runner.next;
        }
        console.log(string);
        return this;
    }
    SLL.prototype.secondLargest = function(){
        if(!this.head){console.log("empty list"); return this}
        var max = this.head.val;
        var secondMax;
        var runner = this.head.next;
        while(runner){
            if(runner.val > max){
                secondMax = max;
                max = runner.val;
            } else if(!secondMax || runner.val > secondMax){
                secondMax = runner.val;
            }
            runner = runner.next;
        }
        console.log("The second-largest value is: " + secondMax)
        return secondMax;
    }
    SLL.prototype.dedupe = function(){
        if(!this.head){console.log("empty list"); return this}
        var map = {};
        map[this.head.val] = true;
        var runner = this.head;
        while(runner.next != null){
            if(!map[runner.next.val]){
                map[runner.next.val] = true;
                runnerPrev = runner;
                runner = runner.next;
            } else {
                runner.next = runner.next.next;
            }
        }
        return this;
    }
    SLL.prototype.copy = function(){
        var copy = new SLL();
        if(!this.head){return copy;}
        else{
            copy.head = Object.assign({}, this.head)
        }
        var runner = copy.head;
        var runner2 = this.head.next;
        while(runner2){
            runner.next = Object.assign({}, runner2);
            runner = runner.next;
            runner2 = runner2.next;
        }
        return copy;
    }
    SLL.prototype.filter = function(lowVal,highVal){
        if(!this.head){console.log("empty list");return this}
        while(this.head.val < lowVal || this.head.val > highVal){
            this.head = this.head.next;
        }
        var runner = this.head;
        while(runner.next){
            if(runner.next.val < lowVal || runner.next.val > highVal){
                runner.next = runner.next.next;
            } else{
                runner = runner.next;
            }
        }
        return this;
    }
    SLL.prototype.partition = function(val){
        //grab pointer to targetNode if it exists
        var targetNode;
        var runner = this.head;
        while(runner.next && runner.val !== val){
            runner = runner.next;
            console.log("running loop 1")
        }
        if(runner.val === val){targetNode = runner}
        //exit function if targetNode DNE
        if(!targetNode){console.log("The value does not exist."); return this}
        //if head value is greater than target, move it as targetNode.next
        //after loop, head.val should be less than targetNode.val or the targetNode
        //itself
        while(this.head.val > targetNode.val){
            var temp = targetNode.next;
            targetNode.next = this.head;
            this.head = this.head.next;
            targetNode.next.next = temp;
            console.log("running loop 2")
        }

        runner = this.head;
        beforeTarget = true;
        while(runner.next){
            if(runner.next === targetNode || runner === targetNode){
                beforeTarget = false;
                runner = runner.next;
            }
            else if(beforeTarget){
                if(runner.next.val > targetNode.val){
                    var temp = targetNode.next;
                    targetNode.next = runner.next;
                    runner.next = runner.next.next;
                    targetNode.next.next = temp;
                } else{
                    runner = runner.next;
                }
            }
            else if(!beforeTarget){
                if(runner.next.val < targetNode.val){
                    var temp = runner.next;
                    runner.next = runner.next.next;
                    temp.next = this.head;
                    this.head = temp;
                } else{
                    runner = runner.next;
                }
            }
            console.log("running loop 3")
        }
        return this;
    }
    SLL.prototype.concat = function(secondList){
        var runner = this.head;
        while(runner.next){runner = runner.next};
        runner.next = secondList.head;
        return this;
    }
    SLL.prototype.removeNegatives = function(){
        if(!this.head){console.log("Empty list");return null}
        while(this.head.val < 0){this.head = this.head.next}
        var runner = this.head;
        while(runner.next){
            if(runner.next.val < 0){runner.next = runner.next.next;}
            else{runner = runner.next}
        }
        return this;
    }
    SLL.prototype.splitOnValue = function(val){
        if(!this.head){console.log("Empty list");return null}
        if(this.head.val === val){var temp = this.head; this.head = null; return temp;}
        var runner = this.head;
        while(runner.next){
            if(runner.next.val === val){
                var temp = runner.next
                runner.next = null;
                return temp;
            }
            runner = runner.next;
        }
        console.log("value not found")
        return null
    }
    SLL.prototype.removeVal = function(val){
        if(!this.head){console.log("Empty list");return this}
        if(this.head.val === val){this.head = this.head.next; return this;}
        var runner = this.head;
        while(runner.next){
            if(runner.next.val === val){
                runner.next = runner.next.next;
                console.log("Successfully removed")
                return this;
            }
        }
        console.log("Value not found");
        return this;
    }
    SLL.prototype.appendVal = function(val,after){
        if(!this.head){
            this.head = new SLNode(val);
            return this;
        }
        var runner = this.head;
        while(runner.next){
            if(runner.val === after){
                var temp = runner.next;
                runner.next = new SLNode(val);
                runner.next.next = temp;
                return this;
            }
            runner = runner.next
        }
        runner.next = new SLNode(val);
        return this;
    }
    SLL.prototype.prependVal = function(val,before){
        if(!this.head || this.head.val === before){
            if(this.head){var temp = this.head}
            this.head = new SLNode(val);
            if(temp){this.head.next = temp;}
            return this;
        }
        var prevRunner;
        var runner = this.head;
        while(runner.next){
            if(runner.next.val === before){
                var temp = runner.next;
                runner.next = new SLNode(val);
                runner.next.next = temp;
                return this;
            }
            runner = runner.next;
        }
        runner.next = new SLNode(val);
        return this;
    }
    SLL.prototype.moveMaxToBack = function(){
        if(!this.head){console.log("Empty list");return this}
        if(!this.head.next){console.log("Only one node present in list");return this}
        var nodeBeforeMax;
        var maxNode = this.head;
        var runner = this.head;
        while(runner.next){
            if(runner.next.val > maxNode.val){
                maxNode = runner.next;
                nodeBeforeMax = runner;
            }
            runner = runner.next;
        }
        if(maxNode.next){
            runner.next = maxNode;
            nodeBeforeMax.next = maxNode.next;
            maxNode.next = null
        }
        return this;
    }
    SLL.prototype.moveMinToFront = function(){
        if(!this.head){console.log("Empty list");return this}
        if(!this.head.next){console.log("Only one node present in list");return this}
        var nodeBeforeMin;
        var minNode = this.head;
        var runner = this.head;
        while(runner.next){
            if(runner.next.val < minNode.val){
                minNode = runner.next;
                nodeBeforeMin = runner;
            }
            runner = runner.next;
        }
        if(nodeBeforeMin){
            var temp = nodeBeforeMin.next;
            nodeBeforeMin.next = nodeBeforeMin.next.next;
            temp.next = this.head;
            this.head = temp;
        }
        return this;
    }
    SLL.prototype.addBack = function(...vals){
        if(vals.length < 1){console.log("Must provide values to add.");return this;}
        var start = 0;
        if(!this.head){this.head = new SLNode(vals[start]);start++}
        var runner = this.head;
        while(runner.next){runner=runner.next}
        while(vals[start]){
            runner.next = new SLNode(vals[start]);
            runner = runner.next;
            start++;
        }
        return this;
    }
    SLL.prototype.removeBack = function(){
        if(!this.head){console.log("Empty list"); return null}
        if(!this.head.next){console.log("Removed value: "+this.head.val);this.head = null;return this}
        var runner = this.head;
        while(runner.next.next){
            runner = runner.next;
        }
        console.log("Removed value: "+runner.next.val);
        runner.next = null;
        return this;
    }
    SLL.prototype.back = function(){
        if(!this.head){console.log("Empty list"); return null}
        var runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        console.log("The last value is: " + runner.val);
        return runner.val;
    }
    SLL.prototype.secondMax = function(){
        if(this.length() < 2){console.log("The list must contain more than 1 value."); return null}
        var max = this.head.val;
        var secondMax;
        var runner = this.head.next;
        while(runner){
            if(runner.val > max){
                secondMax = max;
                max = runner.val;
            }
            else if(!secondMax || secondMax < runner.val){
                secondMax = runner.val;
            }
            runner = runner.next;
        }
        console.log("Second maximum: " + secondMax);
        return secondMax;
    }
    SLL.prototype.kToLast = function(k){
        if(this.length() < k+1){console.log("value at k to last does not exist.");return null}
        var runner = this.head;
        var krunner = this.head;
        //runner is k places ahead of krunner after loop:
        for(var i = 0; i < k; i++){runner = runner.next}
        while(runner.next){
            runner = runner.next;
            krunner = krunner.next;
        }
        //after while loop, runner is the last node on the SLL. krunner is still
        //k nodes behind runner, so it is now on the node k nodes from the last node.
        console.log("k to last value: " + krunner.val);
        return krunner.val;
    }
    SLL.prototype.addFront = function(...vals){
        if(vals.length < 1){console.log("Must provide values to add.");return this;}
        var start = vals.length-1;
        if(!this.head){this.head = new SLNode(vals[start]);start--}
        for(var i = start; i >= 0; i--){
            var temp = new SLNode(vals[i]);
            temp.next = this.head;
            this.head = temp;
        }
        return this;
    }
    SLL.prototype.removeFront = function(){
        if(!this.head){console.log("Empty list");return null}
        this.head = this.head.next;
        return this
    }
    SLL.prototype.contains = function(val){
        if(!this.head){console.log("Empty list");return false}
        runner = this.head;
        while(runner){
            if(runner.val === val){return true}
            runner = runner.next;
        }
        return false;
    }
    SLL.prototype.front = function(){
        if(!this.head){console.log("Empty list");return null}
        return this.head.val;
    }
    SLL.prototype.length = function(){
        if(!this.head){console.log("Empty list");return 0}
        runner = this.head;
        count = 0;
        while(runner){count++;runner = runner.next;}
        return count;
    }
    SLL.prototype.max = function(){
        if(!this.head){console.log("Empty list");return null}
        var max = this.head.val;
        runner = this.head.next;
        while(runner){
            if(runner.val > max){max = runner.val}
            runner = runner.next;
        }
        return max;
    }
    SLL.prototype.min = function(){
        if(!this.head){console.log("Empty list");return null}
        var min = this.head.val;
        runner = this.head.next;
        while(runner){
            if(runner.val < min){min = runner.val}
            runner = runner.next;
        }
        return min;
    }
    SLL.prototype.average = function(){
        if(!this.head){console.log("Empty list");return null}
        var sum = this.head.val;
        runner = this.head.next;
        while(runner){
            sum+=runner.val;
            runner = runner.next;
        }
        return sum/this.length()
    }
    SLL.prototype.display = function(){
        if(!this.head){console.log("Head -> [null]");return this}
        runner = this.head;
        var string = "Head -> ";
        while(runner){
            string+="["+runner.val+"]";
            if(runner.next){string+=" -> "}
            runner = runner.next;
        }
        console.log(string);
        return this;
    }
    SLL.prototype.reverse = function(){
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
