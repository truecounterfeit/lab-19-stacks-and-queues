'use strict';

const expect = require('expect');
const mocha = require('mocha');
const queueConstructor = require('./queue- constructor');

//testing queue

describe('Testing Queue', () => {
  let testQueue = new queueConstructor();

  it('adds to end of queue', (done) => {

    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);

    expect(testQueue.enqueue()).toEqual({1, 2, 3});

  });

  it('subtracts from end of queue', (done) => {

    expect(testQueue.dequeue()).toEqual({1, 2});

  });

});
