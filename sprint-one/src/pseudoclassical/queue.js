var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.head = 0;
};

Queue.prototype.enqueue = function (value) {
  this[this.head + this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function () {
  if (this.length > 0) { 
    this.length--;
    return this[this.head++];
  }
};

Queue.prototype.size = function () {
  return this.length;
};