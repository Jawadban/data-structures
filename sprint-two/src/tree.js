var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  
  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  

  var node = {
    value: value,
    parent: null, 
    children: [],
    addChild: treeMethods.addChild
  };
  
  this.children[this.children.length] = node;

};

treeMethods.contains = function(target) {
  
  var search = function (children, target) {
    if (children.value === target) return true;

    for (var i = 0; i < children.length; i ++) {
      if (children[i].value === target) {
        return true;
      } else if (children[i].children.length) {
        return search(children[i].children);
      }
    }
    return false;
  };

  return search(this.children, target);



};



/*
 * Complexity: What is the time complexity of the above functions?
 */
