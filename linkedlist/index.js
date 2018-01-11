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
}

module.exports = { Node, LinkedList };
