var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.length = 0;
  return instance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.push = function(val) {
  this[this.length] = val;
  this.length++;
};

stackMethods.pop = function() {
  var popped = null;
  if(this.length > 0) {
    popped = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
  }

  return popped;
};
