var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};

  storage.length = 0;

  _.extend(storage, stackMethods);

  return storage;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function () {
  if (this.length > 0) { 
    this.length--;
    var value = this[this.length];
    delete this[this.length];
    return value;
  }
};

stackMethods.size = function () {
  return this.length;
};