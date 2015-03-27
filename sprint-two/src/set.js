var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
};

setPrototype.contains = function(item){
  var contain = false;
  if(this._storage.indexOf(item) !== -1) {
    contain = true;
  }
  return contain;
};

setPrototype.remove = function(item){
  if(this.contains(item)) {
    this._storage.splice(this._storage.indexOf(item), 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
