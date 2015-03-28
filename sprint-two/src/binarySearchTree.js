var BinarySearchTree = function(value){
  //var this = Object.create(BinarySearchTree.prototype);
  this.storage = {};
  //return this;
};

BinarySearchTree.prototype.insert = function (value) {
  if (Object.keys(this.storage).length === 0) {
    this.storage[value] = BinaryTreeNode(value);
    this.head = this.storage[value];
  } else
  {

  }
};

BinarySearchTree.prototype.contains = function () {

};

BinarySearchTree.prototype.depthFirstLog = function () {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

var BinaryTreeNode = function (value) {
  this.value = value;
  this.left = undefined;
  this.right = undefined;
};
