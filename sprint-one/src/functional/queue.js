var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  storage.length = 0;
  storage.head = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage.head+storage.length] = value;
    storage.length++;
  };

  someInstance.dequeue = function() {
    if (storage.length > 0) {
      storage.length--;
      return storage[storage.head++];
    }
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
