var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var size = 0;
  _.extend(someInstance, stackMethods);
  
  return someInstance;
};

var stackMethods = {
  length: 0,
  storage: {},

  size: function () {
    return this.length;
  },

  push: function (value) {
    this.storage[this.length] = value;
    this.length ++;
  },

  pop: function() {
    if (this.length) {
      this.length --;
      var last = this.storage[this.length];
      delete this.storage[this.length];
      return last;
    }
  }
};


