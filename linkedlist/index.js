// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

//Node constructor
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//LinkedList constructor
class LinkedList {
  constructor() {
    this.head = null;
  }
  //insertFirst into LL
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  //size of LL
  size(list) {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  //getFirst of LL
  getFirst() {
    return this.head;
  }
  //getLast of LL
  getLast() {
    let node = this.head;
    if (!node) {
      return null;
    }
    while (node.next != null) {
      node = node.next;
    }
    return node;
  }
  //clear the LL
  clear() {
    this.head = null;
  }
  //removeFirst from the LL
  removeFirst() {
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
  }
  //removeLast from the LL.
  removeLast() {
    //for an empty list.
    if (!this.head) {
      return;
    }
    //for a list with one node.
    if (!this.head.next) {
      this.head = null;
      return;
    }
    //for a list with more than one node.
    let prev = this.head;
    let node = this.head.next;
    while (node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }
  //insert a node in the last position.
  insertLast(data){
    let temp = this.getLast();
    if(!temp){
      this.head = new Node(data);
    }
    else{
      temp.next = new Node(data);
    }
  }
  //get the data of the kth node.
  getAt(kth){
    let counter = 0;
    let node = this.head;
    while(node){
      //finding if match exists.
      if(counter === kth){
        return node;
      }
      counter++;
      node = node.next;
    }
    //kth greater than the length of the list.
    return null;
  }
  //remove kth index node.
  removeAt(kth){
    if(!this.head){ return null;}
    if(kth===0){ this.head = this.head.next; return;}
    const prev = this.getAt(kth - 1);
    if(!prev){ return;}
    if(!prev.next){ return;}
    prev.next = prev.next.next;
  }
  // insertAt(data, kth){
  //   if(!this.head){this.head = new Node(data, this.head);return;}
  //   let temp = new Node(data);
  //   if(kth===0){temp.next = this.head.next; temp = this.head; return;}
  //   const prev = this.getAt(kth - 1);
  //   temp.next = prev.next;
  //   prev.next = temp;
  //   return;
  // }
  insertAt(data, kth){
    if(!this.head){
      this.head = new Node(data);
      return;
    }
    if(kth===0){
      this.head = new Node(data, this.head);
      return;
    }
    const prev = this.getAt(kth - 1) || this.getLast();
    const node = new Node(data, prev.next);
    prev.next = node;
  }
  forEach(i){
    let node = this.head;
    let counter = 0;
    while(node){
      i(node, counter);
      node = node.next;
      counter++;
    }
  }
  *[Symbol.iterator](){
    let node = this.head;
    while(node){
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
