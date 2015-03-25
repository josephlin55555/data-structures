var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    size++;
    storage[size] = value;
    //storage[size] = value;
  };

  someInstance.dequeue = function(){
    if(size > 0) {
      var temp = storage[1];
      size--;

      return temp;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
