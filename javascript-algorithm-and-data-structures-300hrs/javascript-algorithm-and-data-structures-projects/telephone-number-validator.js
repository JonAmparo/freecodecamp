function telephoneCheck(str) {
  // Good luck!
  var regex = /^[1]?\s?[\+]?(\([0-9]{3}\)|[0-9]{3})[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/gim;
  return regex.test(str);
}
telephoneCheck("1 555)555-5555");
//telephoneCheck("1 555-555-5555");
//telephoneCheck("1 (555) 555-5555");
//telephoneCheck("555-555-5555");
//telephoneCheck("27576227382")
//telephoneCheck("(275)76227382")

// ========================================================

function telephoneCheck(str) {
  // Good luck!
  var regex = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  );
  var str;
  console.log(regex);

  if ((str = regex.exec(str)) !== null) {
    if (str.length[0] >= 10 && str.length[0] <= 15) {
      console.log("Found" + str[0] + "Next starts at" + regex.lastIndex);
      return true;
    }
  } else {
    return false;
  }
}
telephoneCheck("1 555-555-5555");
// telephoneCheck("1 (555) 555-5555");
// telephoneCheck("555-555-5555");

// ===================================================================

function telephoneCheck(str) {
  // Good luck!
  var regex = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  );
  var str;
  console.log(regex);

  if ((str = regex.exec(str)) !== null) {
    if (str.length[0] >= 10 && str.length[0] <= 15) {
      console.log("Found" + str[0] + "Next starts at" + regex.lastIndex);
      return true;
    }
  } else {
    return false;
  }
}
telephoneCheck("1 555-555-5555");
// telephoneCheck("1 (555) 555-5555");
// telephoneCheck("555-555-5555");

// =======================================================================

function telephoneCheck(str) {
  // Good luck!
  var regex = /^[1]?\s?[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim;
  return regex.test(str);
}
//telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
// telephoneCheck("555-555-5555");
