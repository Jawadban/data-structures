

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var currentNode = {
    value: node,
    edge: undefined
  };
  this.nodes.push(currentNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      var edgeNode = (this.nodes[i].edge);
      this.nodes.splice(i, 1);
      if (edgeNode) {
        edgeNode.edge = null;
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;

  this.nodes.forEach(function(node) {
    if (node.edge) {
      result = (node.edge.value === fromNode) || (node.edge.value === toNode);
    }
  });

  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var nodeIndexes = this.findNodes(fromNode, toNode);
  this.nodes[nodeIndexes[1]].edge = this.nodes[nodeIndexes[0]];
  this.nodes[nodeIndexes[0]].edge = this.nodes[nodeIndexes[1]];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var nodeIndexes = this.findNodes(fromNode, toNode);
  this.nodes[nodeIndexes[0]].edge = null;
  this.nodes[nodeIndexes[1]].edge = null;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  this.nodes.forEach(function(node) {
    cb(node);
  });
};

Graph.prototype.findNodes = function (fromNode, toNode) {
  var fromNodeIndex = 0;
  var toNodeIndex = 0;

  this.nodes.forEach(function(node, index) {
    if (node.value === fromNode) {
      fromNodeIndex = index;
    }

    if (node.value === toNode) {
      toNodeIndex = index;
    }
  });
  return [fromNodeIndex, toNodeIndex];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Since each function includes looping through a list, the time complexity is O(n) for all of them
 */


