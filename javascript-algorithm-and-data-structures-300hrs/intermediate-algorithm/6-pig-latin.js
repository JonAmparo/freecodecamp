function translatePigLatin(str) {
  return str.split(/^[aeiou]$/i).indexOf(str.toLowerCase()) !== -1;
  
}

translatePigLatin("consonant");
