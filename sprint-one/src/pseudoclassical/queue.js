var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.keys = [];
  this.key = 0;
};


Queue.prototype.size = function () {
  return this.keys.length;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.key] = value;
  this.keys.push(this.key);
  this.key ++;
};

Queue.prototype.dequeue = function () {
  if (this.keys.length) {
    var firstKey = this.keys.shift();
    var temp = this.storage[firstKey];
    delete this.storage[firstKey];
    return temp;
  }
};