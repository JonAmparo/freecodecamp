const smallestCommons = arr => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let commonMultiple = max;

  for (let i = max; i >= min; i--) {
    if (commonMultiple % i) {
      commonMultiple += max;
      i = max;
    }
  }
  return commonMultiple;
};

smallestCommons([1, 5]);
