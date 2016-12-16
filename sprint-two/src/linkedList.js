var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  this.next = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
    } else if (list.head.next === null) {
      list.head.next = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    var temp = list.head.value;
    list.head = list.head.next;
    return temp;
  };

  list.contains = function(target) {
    var current = list.head;
    console.log(current.value);

    while (current) {
      if (current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

  addToTail   = O(1);
  removeHead  = O(1);
  contains    = O(n);

 */
