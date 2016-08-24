class LinkedList {
  constructor(node) {
    this.head = node;
    
  }

  addFirst(val) {
    let temp = this.head;
    this.head = new Node(val);
    this.head.next = temp;
  }

  

  removeFromTail(){
    let current = this.head;
    let prev;
    while(current.next){
      prev = current;
      current = current.next;
    }
    prev.next = null;
    return current.val;
  }
}

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
