function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  console.log("Index Before: " + index);

  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // console.log("String Index 1: " + str[index]);
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
    console.log("After if statement: " + after);
  }
  // Now replace the original str with the edited one.
  console.log("String Index 2: " + str[index]);
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
