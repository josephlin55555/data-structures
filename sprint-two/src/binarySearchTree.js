var BinarySearchTree = function(value){
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};

BinarySearchTree.prototype.insert = function (value) {

  var checkNodes = function(node) {
    var direction = undefined;
    if(value < node.value && value !== node.value) {
      direction = 'left';
    } else {
      direction = 'right';
    }

    if(node[direction] === undefined) {
     node[direction] = new BinarySearchTree(value);
    } else {
      checkNodes(node[direction]);
    }
  };
  checkNodes(this);
};

BinarySearchTree.prototype.contains = function (value) {
// create variable to store contain
  var contain = false;
// recursive function that checks whether current node.value = value;
  var exploreNode = function(node) {

    if(node.value === value) {
      // if yes, update contain to true;
      contain = true;
    }
    // if no, run recursive function on .left and .right
    else {
      if(node.left !== undefined) {
        exploreNode(node.left);
      }
      if(node.right !== undefined) {
        exploreNode(node.right);
      }
    }
  };
  exploreNode(this);
  return contain;
};
BinarySearchTree.prototype.depthFirstLog = function (fn) {

  var callbackNode = function(node) {
    fn(node.value);

    if(node.left !== undefined) {
      callbackNode(node.left);
    }
    if(node.right !== undefined) {
      callbackNode(node.right);
    }

  };
  callbackNode(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
