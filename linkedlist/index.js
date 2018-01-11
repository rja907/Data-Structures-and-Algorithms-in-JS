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
  //insertFirst
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  //size
  size(list) {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

module.exports = { Node, LinkedList };
