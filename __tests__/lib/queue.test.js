'use strict';

const Queue = require('../../lib/queue.js');

describe('Queue', () =>{
  let testArray = [3, 'baz', 'coconut', 7];
  let loadQueue = () => {
    let thisQueue = new Queue();
    for( let i = 0; i<=testArray.length-1; i++ ) {
      thisQueue.enqueue(testArray[i]);
    }
    return thisQueue;
  };

  it('enque, increments counter and adds object', () => {
    let myQueue = loadQueue();
    expect(myQueue.new).toEqual(4);
  });

  it('enque, count corresponds with data', () => {
    let myQueue = loadQueue();
    expect(myQueue.data[2]).toEqual('coconut');
  });

  it('enque, count corresponds with data', () => {
    let myQueue = loadQueue();
    expect(myQueue.data[0]).toEqual(3);
  }); 

  it('dequeue, derements counter', () => {
    let myQueue = loadQueue();
    let deletedItem = myQueue.dequeue(); // eslint-disable-line
    expect(myQueue.new).toEqual(3);
  });

  it('dequeue, deletes first object', () => {
    let myQueue = loadQueue();
    let deletedItem = myQueue.dequeue(); 
    expect(deletedItem).toEqual(3);
  });

  it('dequeue, deletes first object', () => {
    let myQueue = loadQueue();
    let deletedItem = myQueue.dequeue(); // eslint-disable-line
    let newQueue = myQueue;
    console.log(newQueue);
    expect(newQueue.data[1]).toEqual('baz');
  });

});