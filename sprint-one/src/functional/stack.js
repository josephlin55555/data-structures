var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value; //size of 1 === element[0]
    size++;
  };

  someInstance.pop = function(){
    var temp = null;
    if(size > 0) {
      temp = storage[size - 1]; //size of 1 === element[0]
      size--;
    }
    return temp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
