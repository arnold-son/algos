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
    this.xthNodeAtLevelY = function(x,y){
        if(y === 0){
            if(x === 1){
                return this;
            } else {
                return null;
            }
        }
        if(y === 1){
            if(x === 1){
                return this.left;
            } else if(x === 2){
                return this.right;
            } else {
                return null;
            }
        }
        var halfWidth = Math.pow(2,y-1);
        if(x > halfWidth){
            if(this.right === null){
                return null;
            } else {
                return this.right.xthNodeAtLevelY(x - halfWidth,y-1);
            }
        } else {
            if(this.left === null){
                return null;
            } else {
                return this.left.xthNodeAtLevelY(x,y-1);
            }
        }
    }
    this.leftsideBinaryTree = function(arr,level){
        console.log(this.val)
        if(!arr){arr = [] }
        if(!level){level = 1}
        if(level > arr.length){
            arr.push(this.val)
        }
        // if(!this.left && !this.right){ return }
        if(this.left){this.left.leftsideBinaryTree(arr,level+1)}
        if(this.right){this.right.leftsideBinaryTree(arr,level+1)}
        return arr;
    }
    this.containsSum = function(num,sum){
        if(!sum){sum = 0}
        sum += this.val;
        console.log(this.val,sum)
        if(!this.left && !this.right){
            return sum === num;
        } else if(!this.right){
            if(sum === num){
                return true
            } else {
                return this.left.containsSum(num,sum)
            }
        } else if(!this.left){
            if(sum === num){
                return true
            } else {
                return this.right.containsSum(num,sum);
            }
        } else {
            return this.left.containsSum(num,sum) || this.right.containsSum(num,sum);
        }
    }
    this.closestValue = function(val){
        if(this.val === val){
            return val;
        }
        if(this.val > val){
            if(!this.left){
                return this.val;
            } else {
                var leftClosest = this.left.closestValue(val);
                return this.val - val < Math.abs(leftClosest - val) ? this.val : leftClosest;
            }
        } else if(this.val < val){
            if(!this.right){
                return this.val;
            } else {
                var rightClosest = this.right.closestValue(val);
                return val - this.val < Math.abs(val - rightClosest) ? this.val : rightClosest;
            }
        }
    }
    this.nodeBefore = function(){
        if(this.left){
            var runner = this.left;
            while(runner.right){
                runner = runner.right;
            }
            return runner;
        } else if(this.parent){
            return this.parent.val < this.val ? this.parent : null;
        }
        return null;
    }
    this.nodeAfter = function(){
        if(this.right){
            var runner = this.right;
            while(runner.left){
                runner = runner.left;
            }
            return runner;
        } else if(this.parent){
            return this.parent.val > this.val ? this.parent : null;
        }
        return null;
    }
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
    // this.leftsideBinaryTree = function(){
    //     if(this.left || this.right){
    //         return this.left === null ? [this.val].concat(this.right.leftsideBinaryTree()) : [this.val].concat(this.left.leftsideBinaryTree())
    //     } else {
    //         return [this.val]
    //     }
    // }
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

//******************************************************************************

function BST(){
    this.root = null;
    this.isComplete = function(){
        var maxHeight = this.height();
        var firstNodeCheck = this.xthNodeAtLevelY(1,maxHeight-1) === null ? false:true;
        if(firstNodeCheck === true){
            var prevNodeCheck = firstNodeCheck;
            for (var node = 2; node <= Math.pow(2,maxHeight-1); node++) {
                var nodeCheck = this.xthNodeAtLevelY(node,maxHeight-1) === null ? false:true;
                if(prevNodeCheck === false && nodeCheck === true){
                    return false;
                }
                prevNodeCheck = nodeCheck;
            }
            return true;
        } else {
            return false;
        }
    }
    this.isFull = function(){
        return this.height() === this.minHeight();
    }
    this.xthNodeAtLevelY = function(x,y){
        if(this.root === null){
            return null;
        }
        return this.root.xthNodeAtLevelY(x,y);
    }
    this.leftsideBinaryTree = function(){
        if(this.root === null){
            return []
        }
        return this.root.leftsideBinaryTree();
    }
    this.containsSum = function(num){
        if(this.root === null){
            return false;
        }
        return this.root.containsSum(num)
    }
    this.closestValue = function(val){
        if(this.root === null){
            return null;
        }
        return this.root.closestValue(val)
    }
    this.valBefore = function(val){
        if(this.root === null){
            return false;
        } else {
            var closest;
            var runner = this.root;
            while(runner){
                if(runner.val < val){
                    if(!closest || runner.val > closest){
                        closest = runner.val;
                    }
                    runner = runner.right;
                } else {
                    runner = runner.left;
                }
            }
            return closest ? closest : false;
        }
    }
    this.valAfter = function(val){
        if(this.root === null){
            return false;
        } else {
            var closest;
            var runner = this.root;
            while(runner){
                if(runner.val > val){
                    if(!closest || runner.val < closest){
                        closest = runner.val;
                    }
                    runner = runner.left;
                } else {
                    runner = runner.right;
                }
            }
            return closest ? closest : false;
        }
    }
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

var myTree = arrToBST([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
console.log(myTree.isComplete())
