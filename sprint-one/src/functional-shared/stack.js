var Stack = function() {
  var newStack = {};
  newStack.length = 0;


  _.extend(newStack, stackMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this[this.length] = val;
  this.length++;
};

stackMethods.pop = function() {
  var popped = null;

  if (this.length > 0) {
    popped = this[this.length - 1];
    this.length--;
  }

  return popped;
};

stackMethods.size = function() {
  return this.length;
};


