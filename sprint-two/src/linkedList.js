var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // for an empty list, point both head and tail to the first instance of Node
    if (list.head === null) {
      var linkedListNode = Node(value);
      list.head = linkedListNode;
      list.tail = linkedListNode;
    } else {
      // for a non-empty list, point tail to the new instance of Node
      var linkedListNode = Node(value);
      list.tail.next = linkedListNode;
      list.tail = linkedListNode;
    }
  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target){
  //check if target is in the list
    var tempNode = list.head;
    var result = false;
      var checkNode = function(node) {
        if(tempNode.value === target) {
          result = true;
        }
        if(tempNode.next !== null) {
          tempNode = tempNode.next;
          checkNode(tempNode);
        }
      };
    checkNode(tempNode);
    return result;
  };
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node; //functional instantiation
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
