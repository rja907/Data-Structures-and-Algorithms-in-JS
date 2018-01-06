// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.foo1 = new Stack();
    this.foo2 = new Stack();
  }
  add(record) {
    this.foo1.push(record);
  }
  remove() {
    while (this.foo1.peek()) {
      this.foo2.push(this.foo1.pop());
    }
    const record = this.foo2.pop();
    while (this.foo2.peek()) {
      this.foo1.push(this.foo2.pop());
    }
    return record;
  }
  peek() {
    while (this.foo1.peek()) {
      this.foo2.push(this.foo1.pop());
    }
    const record = this.foo2.peek();
    while (this.foo2.peek()) {
      this.foo1.push(this.foo2.pop());
    }
    return record;
  }
}

module.exports = Queue;
