'use strict';

const expect = require('expect');
const mocha = require('mocha');
const stack = require('../lib/stack');
const stackConstructor = require('../lib/stack-constructor');

//testing stack
describe('Testing Stack', () => {
  it('push should insert value to end of stack', (done) => {
    let testStack = new stackConstructor();

    testStack.push(1);
    testStack.push(2);
    testStack.push(3);

    expect(testStack.stackConstructor.stack[0]).toEqual(1);
    expect(testStack.stackConstructor.stack[1]).toEqual(2);
    expect(testStack.stackConstructor.stack[2]).toEqual(3);

  });

  it('pop should remove value from end of stack', (done) => {
    let testStack = new stackConstructor();

    testStack.push(1);
    testStack.push(2);
    testStack.push(3);

    expect(testStack.pop()).toEqual(1, 2);

  });

});
