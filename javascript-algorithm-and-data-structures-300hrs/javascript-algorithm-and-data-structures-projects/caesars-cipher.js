rot13 = str => { // LBH QVQ VG!
  var cipher = "";

  for (var i = 0; i < str.length; i++) {
    var asciiDec = str[i].charCodeAt();
    //console.log(str[i].charCodeAt());

    if (asciiDec <= 90 && asciiDec >= 78) {
      cipher += String.fromCharCode(asciiDec - 13);
    } else if (asciiDec <= 77 && asciiDec >= 65) {
      cipher += String.fromCharCode(asciiDec + 13);
    } else {
      cipher += str[i];
    }
  }

  return cipher;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
// rot13("A");
// rot13("APPLE");
//rot13("JONATHAN AMPARO");
