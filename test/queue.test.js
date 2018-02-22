'use strict';

const expect = require('expect');
const mocha = require('mocha');
const queueConstructor = require('../lib/queue-constructor');
const queue = require('../lib/queue');

//testing queue

describe('Testing Queue', () => {
  it('enqueue should insert value to end of queue', (done) => {
    let testQueue = new queueConstructor();

    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);

    expect(testQueue.queueConstructor.queue[0]).toEqual(1);
    expect(testQueue.queueConstructor.queue[1]).toEqual(2);
    expect(testQueue.queueConstructor.queue[2]).toEqual(3);

  });

  it('pop should remove value from end of queue', (done) => {
    let testQueue = new queueConstructor();

    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);

    expect(testQueue.dequeue()).toEqual(1, 2);
    

  });

});
