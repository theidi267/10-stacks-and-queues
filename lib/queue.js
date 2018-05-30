'use strict';

class Queue {
  constructor(){
    this.old = 0;
    this.new = 0;
    this.data = {};
  }
}  

Queue.prototype.enqueue = function(data){
  this.data[this.new] = data;
  this.new++;
};

Queue.prototype.dequeue = function() {
  this.new--;
  let old = this.old; 
  let deletedData = this.data[old];
  
  delete this.data[old];
  this.old++;
  return deletedData;
};

module.exports = Queue;