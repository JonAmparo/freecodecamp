function truncateString(str, num) {
  if (num > 3) {
    if (str.length > num) {
      str = str.slice(0, num);
      str = str.concat("...");
    }
    return str;
  } else {
    str = str.slice(0, num);
    str = str.concat("...");
  }
  return str;
}
