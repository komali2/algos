"use strict";
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

  getFirst(){
    return this.head.val;
  }

  getLast(){
    return this.tail.val;
  }

  removeFirst(){
    let temp = this.head;
    if(this.head.next){
      this.head = this.head.next;
    } else{
      this.head = null;
    }
    return temp.val;
    
  }

  removeLast(){
    let current = this.head;
    let prev;
    while(current.next){
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    prev.next = null;
    return current.val;
  }
  size(){
    let sum = 0;
    let current = this.head;
    if(this.head){
      sum++;
    }
    while(current.next){
      sum++;
      current = current.next;
    }
    return sum;
  }
}

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

// var list = new LinkedList(3);
// list.addFirst(2);
// list.addLast(5);
// list.addFirst(1);
// list.addLast(9);
// list.removeFirst();
// list.removeLast();
// list.addLast(20);

// list.size();