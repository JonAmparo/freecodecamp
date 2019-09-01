function palindrome(str) {
  // Good luck!
  var arr = str
    .replace(/[\W_]/g, "")
    .toLowerCase()
    .split("");

  return arr.join("") == arr.reverse().join("");
}
palindrome("eye");

// ===============================================

function palindrome(str) {
  var arr = str.replace(/[\W_]/g, "").toLowerCase();

  console.log("Orginial String: " + str);
  console.log("Array: " + arr);

  var strLength = Math.floor(arr.length + 1 / 2);
  console.log("String Length #1: " + strLength);

  for (var i = 0; i < strLength; i++) {
    if (arr[i] !== arr[strLength - i - 1]) {
      console.log("Reversed: " + arr);
      console.log("String Length #2: " + strLength);
      return false;
    }
  }
  return true;
}
console.log(palindrome("eye"));
console.log(palindrome("race car"));
console.log(palindrome("A man, a plan, a canal. Panama"));
