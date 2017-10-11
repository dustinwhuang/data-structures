var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);

  storage.length = 0;
  storage.head = 0;

  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this[this.head + this.length] = value;
  this.length++;
};

queueMethods.dequeue = function () {
  if (this.length > 0) { 
    this.length--;
    var value = this[this.head];
    delete this[this.head];
    this.head++;
    return value;
  }
};

queueMethods.size = function () {
  return this.length;
};