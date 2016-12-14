var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keys = [];
  var key = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[key] = value;
    key ++;
    keys = Object.keys(storage);
  };

  someInstance.dequeue = function() {
    var first = storage[keys[0]];
    delete storage[keys[0]];
    keys = Object.keys(storage);
    return first;
  };

  someInstance.size = function() {
    return keys.length;
  };

  return someInstance;
};
