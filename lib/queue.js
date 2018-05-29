'use strict';

class Queue {
  constructor(){
    this.old = 1;
    this.new = 1;
    this.data = {};
  }
}  

Queue.prototype.enque = function(data){
  this.data[this.new] = data;
  this.new++;
};

Queue.prototype.deque = function() {
  let old = this.old; 
  let deletedData = this.data[old];
  
  delete this.data[old];
  this.old++;
  return deletedData;
};

module.exports = Queue;