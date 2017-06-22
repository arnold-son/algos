function BTNode(value){
    this.val = value;
    this.left = null;
    this.right = null;
    this.size = function(){
        var leftSize = this.left === null ? 0 : this.left.size();
        var rightSize = this.right === null ? 0 : this.right.size();
        return leftSize + rightSize + 1;
    }
    this.closestCommonAncestor = function(val1,val2){
        if(this.val === val1 || this.val === val2){
            return this.val;
        }
        if(this.left.contains(val1)){
            if(this.left.contains(val2)){
                return this.left.closestCommonAncestor(val1,val2)
            }
            return this.val;
        }
        if(this.right.contains(val2)){
            return this.right.closestCommonAncestor(val1,val2)
        }
        return this.val;
    }
    this.contains = function(val){
        if(val === this.val){
            return true;
        } else if(val < this.val){
            if(this.left === null){
                return false;
            }
            return this.left.contains(val);
        } else if(val > this.val){
            if(this.right === null){
                return false;
            }
            return this.right.contains(val);
        }
    }
    this.min = function(){
        var runner = this;
        while(runner.left){
            runner = runner.left
        }
        return runner.val;
    }
    this.max = function(){
        var runner = this;
        while(runner.right){
            runner = runner.right
        }
        return runner.val;
    }
    this.rMin = function(){
        if(!this.left){
            return this.val
        }
        return this.left.rMin()
    }
    this.height = function(){
        if(!this.left && !this.right){
            return 1;
        }
        var leftHeight = this.left === null ? 0 : this.left.height();
        var rightHeight = this.right === null ? 0 : this.right.height();
        return leftHeight > rightHeight ? leftHeight+1 : rightHeight+1;
    }
    this.minHeight = function(){
        if(!this.left && !this.right){
            return 1;
        }
        var leftHeight = this.left === null ? 0 : this.left.minHeight();
        var rightHeight = this.right === null ? 0 : this.right.minHeight();
        return leftHeight < rightHeight ? leftHeight+1 : rightHeight+1;
    }
    this.isBalanced = function(){
        return this.height() - this.minHeight() <= 1;
    }
}
function BST(){
    this.root = null;
    this.add = function(val){
        if(this.root === null){
            this.root = new BTNode(val);
            return this;
        } else {
            var runner = this.root;
            while(runner){
                if(val < runner.val){
                    if(runner.left === null){
                        runner.left = new BTNode(val)
                        return this
                    }
                    runner = runner.left;
                } else if(val > runner.val){
                    if(runner.right === null){
                        runner.right = new BTNode(val)
                        return this;
                    }
                    runner = runner.right;
                } else {
                    return this;
                }
            }
        }
    }
    this.contains = function(val){
        if(this.root === null){
            return null
        }
        return this.root.contains(val);
    }
    this.min = function(){
        if(this.root === null){
            return null
        }
        return this.root.min()
    }
    this.rMin = function(){
        if(this.root === null){
            return null
        }
        return this.root.rMin();
    }
    this.size = function(){
        if(this.root === null){
            return 0;
        }
        return this.root.size();
    }
    this.isEmpty = function(){
        return this.root === null;
    }
    this.height = function(){
        if(this.root === null){
            return 0;
        }
        return this.root.height();
    }
    this.minHeight = function(){
        if(this.root === null){
            return 0;
        }
        return this.root.minHeight();
    }
    this.isBalanced = function(){
        if(this.root === null){
            return true;
        }
        return this.root.isBalanced();
    }
    this.closestCommonAncestor = function(val1,val2){
        if(this.root === null){
            return true;
        }
        return this.root.closestCommonAncestor(val1,val2)
    }
}

function arrToBST(arr){
    function arrToBSTNodes(arr){
        if(arr.length === 0){
            return null;
        }
        var mid = Math.floor(arr.length/2)
        var node = new BTNode(arr[mid])
        node.left = arrToBSTNodes(arr.slice(0,mid))
        node.right = arrToBSTNodes(arr.slice(mid+1))
        return node;
    }
    var newTree = new BST();
    newTree.root = arrToBSTNodes(arr);
    return newTree;
}

var myTree = arrToBST([1,2,3,4,5,6,7,8])
console.log(myTree.closestCommonAncestor(4,8))
