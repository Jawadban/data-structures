var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.keys = [];
  someInstance.key = 0;

  return someInstance;
};

var queueMethods = {

  size: function () {
    return this.keys.length;
  }, 

  enqueue: function (value) {
    this.storage[this.key] = value;
    this.keys.push(this.key);
    this.key ++;
  }, 

  dequeue: function () {
    if (this.keys.length) {
      var firstKey = this.keys.shift();
      var temp = this.storage[firstKey];
      delete this.storage[firstKey];
      return temp;
    }
  }

};


