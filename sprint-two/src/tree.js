var Tree = function(value){
  var newTree = _.extend({}, treeMethods);
  newTree.value = value;

  // your code here]


  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var childTree = Tree(value);
  this.children.push(childTree);

};

treeMethods.contains = function(target){
  var results = false;

  var checkNode = function(node) {

    if(node.value === target) {
      results = true;
    }

    for(var i = 0; i < node.children.length; i++) {
      checkNode(node.children[i]);
    }
  };

  checkNode(this);
  return results;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
