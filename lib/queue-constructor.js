'use strict';

//implement a Queue constructor
module.exports = class queue {
  constructor(){
    this.storage = {};
    this.length = 0;
  }
  //implement enqueue(value) and dequeue() methods on the Queue prototype

  enqueue(value) {
    this.storage[this.length] = value;
    return this.length++;
  }

  dequeue(value)
    this.storage[this.length] = value
    return this.length--;
  }
