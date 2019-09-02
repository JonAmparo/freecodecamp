function translatePigLatin(str) {
  var firstVowel = str.match(/[aeiou]/);
  var firstIndex = str.indexOf(firstVowel);

  console.log(firstIndex);

  if (firstIndex >= 1) {
    return str.slice(firstIndex) + str.slice(0, firstIndex) + "ay";
  } else if (firstIndex == 0) {
    return str + "way";
  }
  return str + "ay";
}

translatePigLatin("nnn");
// translatePigLatin("nn");
// translatePigLatin("consonant");
