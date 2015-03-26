var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.length = 0;

  return instance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(val) {
  this[this.length] = val;
  this.length++;
};

queueMethods.dequeue = function() {
  var popped = null;
  if(this.length > 0){
    popped = this[0];
    for (var key in this) {
      this[key-1]=this[key];
    }
    delete this[this.length-1];
    delete this[-1];
    this.length--;
  }
  return popped;
};
