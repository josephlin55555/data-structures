var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var temp = null;

      if(size > 0) {
        temp = storage[0];
        for(var key in storage) {
          storage[key - 1] = storage[key];
        }
        delete storage[size - 1];
        delete storage[-1];
        size--;
      }

    return temp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
