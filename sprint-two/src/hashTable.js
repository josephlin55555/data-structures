var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  //if bucket doesn't exist, create new bucket
  if(!bucket) {
    bucket = [];
    this._storage.set(i, bucket);
  } //if bucket exists, check if key === k in tuple
  var found = false;
  for(var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if(k === tuple[0]) {
      tuple[1] = v;
      found = true;
    }
  }

  if(!found) {
    bucket.push([k, v]);
  }

    //if yes, update key in tuple
    //if not, add tuple to bucket


};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // create variable to reference bucket at position i
  var bucket = this._storage.get(i);

  // if bucket does not exist, return null
  if(!bucket) {
    return null;
  }

  for(var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    // if tuple exists, return tuple[1]
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  // if tuple does not exist, return null
  return null;

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if(!bucket) {
    return null;
  }

  for(var j = 0; j < bucket.length; j++) {
    var tuple = bucket[j];
    if (tuple[0] === k) {
      bucket.splice(j, 1);
      return tuple[1];
    }
  }
  return null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

















