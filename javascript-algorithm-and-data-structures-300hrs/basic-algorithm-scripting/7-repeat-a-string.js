function repeatStringNumTimes(str, num) {
  // repeat after me
  var string1 = "";

  if (num > 0) {
    for (var i = 0; i < num; i++) {
      string1 += str;
    }
  } else {
    return "";
  }
  return string1;
}

repeatStringNumTimes("abc", 3);
