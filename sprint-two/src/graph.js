var Graph = function(){
  //good practice
  // this = Object.create(Graph.prototype);

  this.storage = {};
  //return this;
};

Graph.prototype.addNode = function(node){
  this.storage[node] = {value: node, edges: []};
  // this.storage[node] = new GraphNode(node);
};

Graph.prototype.contains = function(node){
  var exist = false;
  if(this.storage[node] !== undefined) {
    exist = true;
  }
  return exist;

};

Graph.prototype.removeNode = function(node){
  if(this.storage[node] !== undefined) {
    delete this.storage[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var containsEdge = false;
  if(this.storage[fromNode].edges.indexOf(this.storage[toNode]) !== -1){
    containsEdge = true;
  }
  return containsEdge;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //checks if edges does not contain toNode
  if(this.storage[fromNode].edges.indexOf(this.storage[toNode]) === -1){
    this.storage[fromNode].edges.push(this.storage[toNode]);
    this.storage[toNode].edges.push(this.storage[fromNode]);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromIndex = this.storage[fromNode].edges.indexOf(this.storage[toNode]);
  var toIndex = this.storage[toNode].edges.indexOf(this.storage[fromNode]);
  if(index !== -1) {

    this.storage[fromNode].edges.splice(fromIndex, 1);
    this.storage[toNode].edges.splice(toIndex, 1);
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.storage) {
    cb(key);
  }
};


// var GraphNode = function(value) {
//   // var obj = Object.create(this)
//   this.value = value;
//   this.edges = [];

//   //return obj
// };


/*
 * Complexity: What is the time complexity of the above functions?
 */



