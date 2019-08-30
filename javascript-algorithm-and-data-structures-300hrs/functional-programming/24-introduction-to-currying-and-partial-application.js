function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}

const add = x => y => x => x + y + z;

// Add your code above this line
add(10)(20)(30);
