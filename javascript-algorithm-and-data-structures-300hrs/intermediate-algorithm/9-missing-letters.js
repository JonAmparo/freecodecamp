const fearNotLetter = str => {
  for (let i = 0; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
};

console.log("Missing letter: " + fearNotLetter("abce"));
console.log("Missing letter: " + fearNotLetter("abcdefghjklmno"));
console.log("Missing letter: " + fearNotLetter("stvwx"));
console.log("Missing letter: " + fearNotLetter("bcdf"));
console.log("Missing letter: " + fearNotLetter("abcdefghjklmno"));
