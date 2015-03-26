var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.length = 0;

  _.extend(instance, queueMethods);
  return instance;
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
  var removed = null;

  if(this.length > 0) {
    removed = this[0];
    for(var key in this) {
      this[key - 1] = this[key];
    }
    delete this[this.length - 1];
    delete this[-1];
    this.length--;
  }

  return removed;
};


