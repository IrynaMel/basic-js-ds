const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 const node = new ListNode();

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
}
  getUnderlyingList() {
    return this.head
  }

  enqueue( value ) {
    let node = new ListNode(value); 

    if (this.length === 0) {
        this.head = node;  
        
    } else {
        let current = this.head;

        while(current.next) {
            current = current.next;
        }

        current.next = new ListNode(value);
    }

    this.length++;
  }

  dequeue() {
    let current = this.head; 
    let value = this.head.value
    this.head = current.next;
    return value
  }
}

module.exports = {
  Queue
};
