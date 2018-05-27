'use strict';

class Stack {
  constructor(){
    this.count = 0;
    this.data = {};
  }
}

Stack.prototype.push = function(data){
  let count = this.count ++;
  this.data[this.count] = data;
};

Stack.prototype.pop = function() {
  let count = this.count;
  let deletedData = this.data[this.count];

  delete this.data[this.count];
  this.count --;

  return deletedData;
};

module.exports = Stack;