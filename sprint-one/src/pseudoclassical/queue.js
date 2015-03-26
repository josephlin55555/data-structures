var Queue = function() {
  this.length = 0;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function(val) {
  this[this.length]=val;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var popped = null;
  if(this.length > 0) {
    popped = this[0];
    for (var key in this) {
      this[key - 1] = this[key];
    }
    delete this[this.length-1];
    delete this[-1];
    this.length--;
  }
  return popped;
};
