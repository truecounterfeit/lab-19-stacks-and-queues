'use strict';

const expect = require('expect');
const mocha = require('mocha');
const Stack = require('../lib/stack.js');
const stackConstructor = require('./stack- constructor');

//testing stack
describe('Testing Stack', () => {
it('implements last on first out funcionality', (done) => {
    let testStack = new Stack();

    testStack.push(1);
    testStack.push(2);
    testStack.push(3);

    expect(testStack.pop()).toEqual(3);
    expect(testStack.pop()).toEqual(2);
    expect(testStack.pop()).toEqual(1);

  });

});

describe('Testing Stack', () => {
it('implements last on first out funcionality', (done) => {
    let testStack = new Stack();

    testStack.push(1);
    testStack.push(2);
    testStack.push(3);

    expect(testStack.pop()).toEqual(3);
    expect(testStack.pop()).toEqual(2);
    expect(testStack.pop()).toEqual(1);

  });

});
