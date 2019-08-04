function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false) {
    return true;
  } else {
    bool = false;
  }
  return bool;
}
booWho(null);

function booWho2(bool) {
  return typeof bool === "boolean";
}

// test here
booWho2(null);
