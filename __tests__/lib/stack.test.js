'use strict';

const Stack = require('../../lib/stack.js');

describe('Stack', () =>{
  let testArray = [3, 'baz', 'coconut', 7];
  let loadStack = () => {
    let thisStack = new Stack();
    for( let i = 0; i<=testArray.length-1; i++ ) {
      thisStack.push(testArray[i]);
    }
    return thisStack;
  };

  it('push, increments counter and adds object', () => {
    let myStack = loadStack();
    expect(myStack.count).toEqual(4);
  });

  it('push, count corresponds with data', () => {
    let myStack = loadStack();
    console.log(myStack.data[3]);
    expect(myStack.data[3]).toEqual('coconut');
  });

  it('push, count corresponds with data', () => {
    let myStack = loadStack();
    expect(myStack.data[1]).toEqual(3);
  }); 

});
