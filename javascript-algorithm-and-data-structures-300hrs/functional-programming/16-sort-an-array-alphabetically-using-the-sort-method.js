function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a < b;
  });
}
reverseAlpha(["l", "h", "z", "b", "s"]);
// Returns ['z', 's', 'l', 'h', 'b']

function alphabeticalOrder(arr) {
  // Add your code below this line
  var newArr = arr.sort();
  console.log(newArr);
  return newArr;
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
