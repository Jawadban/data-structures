var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    keys: [],
    key: 0,
  };
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  

  size: function() {
    return this.keys.length;
  },
  enqueue: function(value) {
    this.storage[this.key] = value;
    this.keys.push(this.key);
    this.key ++;
  },
  dequeue: function() {
    if (this.key) {
      var first = this.storage[this.keys[0]];
      delete this.storage[this.keys[0]];
      this.keys.shift();
      return first;
    }
  }

};


