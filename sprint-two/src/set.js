var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
  console.log(this._storage);
};

setPrototype.contains = function(item) {
  var result = false;
  this._storage.forEach(function(storageItem) {
    if (storageItem === item) {
      result = true;
    }
  });
  return result;
};

setPrototype.remove = function(item) {
  this._storage.forEach(function(storageItem, index, collection) {
    if (storageItem === item) {
      collection.splice(index, 1);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 add = O(1);
 contains = O(n);
 remove = O(n);
 */
