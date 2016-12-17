var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var result = false;

  //depth first search
  var search = function (node, target) {
    if (node.value === target) {
      result = true;
    } else {
      for (var i = 0; i < node.children.length; i ++) {
        search(node.children[i], target);
      }
    }
    return result;
  };

  return search(this, target);
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1);
 contains: O(n);
 */