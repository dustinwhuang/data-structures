var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  storage.length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storage.length] = value;
    storage.length++;
  };

  someInstance.pop = function() {
    if (storage.length > 0) {
      storage.length--;
      return storage[storage.length];
    }
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
