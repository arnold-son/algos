function SLL(){
    this.head = null;
    this.tail = null;
}
function SLNode(val){
    this.val = val;
    this.next = null;
}

function BTNode(value){
    this.val = value;
    this.left = null;
    this.right = null;
    this.parent = null;
    this.isValid = function(min,max){
        if(min){
            if(this.val <= min){
                return false
            }
        }
        if(max){
            if(this.val >= max){
                return false
            }
        }
        var leftValid = this.left ? this.left.isValid(min,this.val) : true;
        var rightValid = this.right ? this.right.isValid(this.val,max) : true;
        return leftValid && rightValid;
    }
    this.remove = function(val, parent, branch){
        if(this.val === val){
            if(this.left && this.right){
                this.val = this.right.min();
                this.right.remove(this.val, this, "right");
            } else if(this.left){
                if(branch === "left"){
                    parent.left = this.left
                } else {
                    parent.right = this.left
                }
            } else if(this.right){
                if(branch === "left"){
                    parent.left = this.right
                } else {
                    parent.right = this.right
                }
            } else {
                if(branch === "left"){
                    parent.left = null
                } else {
                    parent.right = null
                }
            }
            return true;
        } else if(this.left === null && this.right === null){
            return false;
        } else if(val < this.val){
            return this.left.remove(val, this, "left")
        } else if(val > this.val){
            return this.right.remove(val, this, "right")
        }
    }
    this.BSTtoList = function(){
        if(this.left){
            var list = this.left.BSTtoList();
            list.tail.next = new SLNode(this.val);
            list.tail = list.tail.next;
        } else {
            var list = new SLL();
            list.head = new SLNode(this.val);
            list.tail = list.head;
        }
        if(this.right){
            var right = this.right.BSTtoList();
            list.tail.next = right.head;
            list.tail = right.tail;
        }
        return list;
    }
    this.BSTtoArray = function(){
        var leftAndCurrent = this.left === null ? [this.val] : this.left.BSTtoArray().concat([this.val]);
        var right = this.right === null ? [] : this.right.BSTtoArray();
        return leftAndCurrent.concat(right);
    }
    this.BST2ArrPre = function(){
        var currentAndLeft = this.left === null ? [this.val] : [this.val].concat(this.left.BST2ArrPre());
        var right = this.right === null ? [] : this.right.BST2ArrPre();
        return currentAndLeft.concat(right);
    }
    this.BST2ArrPost = function(){
        var left = this.left === null ? [] : this.left.BST2ArrPost();
        var rightAndCurrent = this.right === null ? [this.val] : this.right.BST2ArrPost().concat([this.val]);
        return left.concat(rightAndCurrent);
    }
    this.bstPreOrder = function(){
        console.log(this.val);
        if(this.left !== null){
            this.left.bstPreOrder();
        }
        if(this.right !== null){
            this.right.bstPreOrder();
        }
    }
    this.bstPostOrder = function(){
        if(this.left === null && this.right === null){
            console.log(this.val);
        } else {
            if(this.left !== null){
                this.left.bstPostOrder();
            }
            if(this.right !== null){
                this.right.bstPostOrder();
            }
            console.log(this.val)
        }
    }
    this.size = function(){
        var leftSize = this.left === null ? 0 : this.left.size();
        var rightSize = this.right === null ? 0 : this.right.size();
        return leftSize + rightSize + 1;
    }
    this.add = function(val){
        if(val < this.val){
            if(this.left === null){
                this.left = new BTNode(val)
                this.left.parent = this
            } else {
                this.left.add(val);
            }
        } else {
            if(this.right === null){
                this.right = new BTNode(val)
                this.right.parent = this
            } else {
                this.right.add(val);
            }
        }
    }
    this.closestCommonAncestor = function(min,max){
        if(this.val === min || this.val === max || (this.val > min && this.val < max)){
            return this.val;
        }
        return min < this.val ? this.left.closestCommonAncestor(min,max) : this.right.closestCommonAncestor(min,max);
    }
    this.contains2 = function(val){
        if(val === this.val){
            return true;
        } else if(val < this.val){
            return (this.left === null) ? false : this.left.contains2(val);
        } else if(val > this.val){
            return (this.right === null) ? false : this.right.contains2(val);
        }
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
        return this.left === null ? this.val : this.left.rMin();
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
    this.removeAll = function(){
        this.root = null;
    }
    this.remove = function(val){
        if(this.root === null){
            return false;
        }
        if(this.root.val === val){
            if(this.root.left === null && this.root.right === null){
                this.root = null;
            }
            else if(this.root.left === null){
                this.root = this.root.right;
            } else if(this.root.right === null){
                this.root = this.root.left;
            } else {
                this.root.val = this.root.right.min();
                this.root.right.remove(this.root.val);
            }
            return true;
        } else {
            return this.root.remove(val);
        }
    }
    this.BSTtoList = function(){
        if(this.root === null){
            return new SLL();
        }
        return this.root.BSTtoList();
    }
    this.BST2ArrPost = function(){
        if(this.root === null){
            return [];
        }
        return this.root.BST2ArrPost();
    }
    this.BST2ArrPre = function(){
        if(this.root === null){
            return [];
        }
        return this.root.BST2ArrPre();
    }
    this.BSTtoArray = function(){
        if(this.root === null){
            return [];
        }
        return this.root.BSTtoArray();
    }
    this.bstPostOrder = function(){
        if(this.root === null){
            console.log(null)
        }
        this.root.bstPreOrder();
    }
    this.bstPreOrder = function(){
        if(this.root === null){
            console.log(null)
        }
        this.root.bstPreOrder();
    }
    this.add = function(val){
        if(this.root === null){
            this.root = new BTNode(val);
        } else {
            this.root.add(val);
        }
        return this;
    }
    this.contains2 = function(val){
        return this.root === null ? false : this.root.contains2(val)
    }
    this.contains = function(val){
        if(this.root === null){
            return false
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
            return null;;
        }
        var min = val1 < val2 ? val1 : val2;
        var max = val1 > val2 ? val1 : val2;
        return this.root.closestCommonAncestor(min,max)
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
        if(node.left){node.left.parent = node}
        node.right = arrToBSTNodes(arr.slice(mid+1))
        if(node.right){node.right.parent = node}
        return node;
    }
    var newTree = new BST();
    newTree.root = arrToBSTNodes(arr);
    return newTree;
}

var myTree = new BST();
var arrBST = arrToBST([1,2,3,4,5,6,7])
console.log(arrBST.remove(8))
console.log(arrBST.BSTtoArray())
