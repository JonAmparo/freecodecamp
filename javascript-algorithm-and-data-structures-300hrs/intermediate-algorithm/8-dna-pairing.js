const pairElement = str => {
  const pairs = {
    A: "AT",
    T: "TA",
    C: "CG",
    G: "GC"
  };

  return str.split("").map(e => pairs[e].split(""));
};