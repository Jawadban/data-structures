

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index]) {
    if (this._storage[index].indexOf(k) === -1) {
      this._storage[index].push(k, v);
    } else {
      this._storage[index] = [k, v];
    }
  } else {
    this._storage[index] = [k, v];
  }
  console.log(this._storage);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index].length > 2) {
    for (var i = 0; i < this._storage[index].length; i ++) {
      if (this._storage[index][i] === k) {
        return this._storage[index][i + 1];
      }
    }
  } else {
    return (this._storage[index][1]);
  }

  return result;
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index].splice(0, 2);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */