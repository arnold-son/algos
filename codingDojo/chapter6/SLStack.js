function SLStack(){
    function SLNode(val){
        this.val = val;
        this.next = null;
    }
    var top;
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
            return
        } else{
            var temp = top;
            top = top.next;
            return temp;
        }
    }
    this.top = function(){
        return top;
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
        if(!top){return true}
        return false;
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
    this.compareStacks(secondStack){
        if(!top && !secondStack.top()){
            return true;
        } else if(!top || !secondStack.top()){
            return false;
        }
        var runner1 = top;
        var runner2 = secondStack.top();
        while(runner1 || runner2){
            if(!runner1 || runner2){
                return false
            } else if(runner1.val !== runner2.val){
                return false;
            }
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        return true;
    }
}
