var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var length = 0;
  var head = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[head+length] = value;
    length++;
  };

  someInstance.dequeue = function() {
    if (length > 0) {
      length--;
      return storage[head++];
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
