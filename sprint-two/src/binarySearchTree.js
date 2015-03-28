var BinarySearchTree = function(value){
  //var this = Object.create(BinarySearchTree.prototype);
  this.storage = {};
  this.storage.value = new BinaryTreeNode(value);
  this.storage.head = this.storage.value;
  //this.value = value;
  //return this;
  debugger; //can't use this.storage; must refer to BST object
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
     node[direction] = new BinaryTreeNode(value);
     node[direction];
    } else {
      checkNodes(node[direction]);
    }
    debugger;

  };

  // if (Object.keys(this.storage).length === 0) {
  //   this.storage[value] = new BinaryTreeNode(value);
  //   this.head = (this.storage)[value];
  // }

  checkNodes(this.storage.head);
    //storage[value] = new BinaryTreeNode(value);

};

BinarySearchTree.prototype.contains = function () {

};

BinarySearchTree.prototype.depthFirstLog = function () {

};

var BinaryTreeNode = function (value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
