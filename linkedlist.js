class LinkedList {
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
  }

  addFirst(val) {
    let temp = this.head;
    this.head = new Node(val);
    this.head.next = temp;
  }

  addLast(val){
    let temp = this.tail;
    this.tail = new Node(val);
    temp.next = this.tail;
  }

  removeLast(){
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
