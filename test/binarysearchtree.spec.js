describe('Binary search tree', ()=>{
    it('should exist', ()=>{
        expect(binarySearchTree).toBeDefined();
    });
    var tree = new binarySearchTree(3);
    it('should be able to create new versions of itself', ()=>{
        expect(tree instanceof binarySearchTree).toBe(true);
    })


    it('should be able to add new nodes', ()=>{
        expect(tree.addNode).toBeDefined();
        for(var i = 0; i < 5; i++){
            if(i !== 3){
                tree.addNode(i);
            }
        }
        expect(tree.right.val).toBe(4);
        expect(tree.left.val).toBe(0);
    });

    it('should add nodes in the right order', ()=>{
        var tree2 = new binarySearchTree(5);
        tree2.addNode(2);
        expect(tree2.left.val).toBe(2);
        tree2.left.addNode(3);
        expect(tree2.left.right.val).toBe(3);
        tree2.left.right.addNode(4);
        expect(tree2.left.right.right.val).toBe(4);
    });

    it('should be able to search for values', ()=>{
        var tree3 = new binarySearchTree(50);
        tree3.addNode(35);
        tree3.left.addNode(45);
        tree3.left.right.addNode(40);
        tree3.left.right.addNode(46);
        tree3.left.addNode(20);
        tree3.left.left.addNode(25);
        tree3.left.left.addNode(19);
        tree3.addNode(75);
        tree3.right.addNode(60);
        tree3.right.addNode(80);
        expect(tree3.contains(35)).toBe(true);
        expect(tree3.contains(45)).toBe(true);
        expect(tree3.contains(40)).toBe(true);
        expect(tree3.contains(46)).toBe(true);
        expect(tree3.contains(20)).toBe(true);
        expect(tree3.contains(25)).toBe(true);
        expect(tree3.contains(19)).toBe(true);
        expect(tree3.contains(1)).toBe(false);
        expect(tree3.contains(100)).toBe(false);
        expect(tree3.contains(51)).toBe(false);
        expect(tree3.contains(41)).toBe(false);
    });
});