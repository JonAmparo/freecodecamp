function mutation(arr) {
  let string1 = arr[0].toLowerCase();
  let string2 = arr[1].toLowerCase();

  for (var i = 0; i < string2.length; i++) {
    if (string1.indexOf(string2[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
