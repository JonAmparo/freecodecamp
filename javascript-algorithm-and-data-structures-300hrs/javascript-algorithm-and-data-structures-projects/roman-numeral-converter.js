var convertToRoman = num => {
  // empty string variable for the roman numbers
  var roman = "";
  // roman numeral array
  var romanNumeral = ["M", "CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  // number array
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  // Loop the indexes of the numbers array
  for (var i = 0; i < numbers.length; i++) {
    // Continue to loop while the value at the current index will fit into numCopy
    while (numbers[i] <= num) {
      // Add the Roman numeral & decrease numCopy by the decimal equivalent.
      roman = roman + romanNumeral[i];
      num = num - numbers[i];
    }
  }
  return roman;
};

// test here
console.log(convertToRoman(36));
console.log(convertToRoman(136));
console.log(convertToRoman(336));
