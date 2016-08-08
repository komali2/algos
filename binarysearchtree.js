class binarySearchTree{
    constructor(val){
        this.val = val;
        this.right = null;
        this.left = null;
    }

    addNode(val){
        if(typeof val === 'number'){
            if(val < this.val){
                if(this.left){
                    this.left.addNode(val);
                }else{
                    this.left = new binarySearchTree(val);
                }
            }
            else if(val > this.val){
                if(this.right){
                    this.right.addNode(val);
                }
                else{
                    this.right = new binarySearchTree(val);
                }
            } else{
                throw new Error('Binary Search trees should not hold duplicate values', val);
            }
        } else{
            throw new Error('Usage: addNode(val[type: num])')
        }
    }

    contains(val){
        if(this.val === val){
            return true;
        }
        else if(val < this.val){
            if(this.left){
                return this.left.contains(val);
            }else{
                return false;
            }
        }
        else if(val > this.val){
            if(this.right){
                return this.right.contains(val);
            }else{
                return false;
            }
        } else{
            return false;
        }
    }

}