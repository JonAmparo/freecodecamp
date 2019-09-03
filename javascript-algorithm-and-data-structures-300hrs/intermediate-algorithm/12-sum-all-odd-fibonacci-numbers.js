const sumFibs = num => {
  var prevNum = 0;
  var curNum = 1;
  var counter = 0;

  while (curNum <= num) {
    // Destructoring
    [curNum, prevNum] = [curNum + prevNum, curNum];

    if (prevNum % 2 !== 0) {
      counter += prevNum;
    }
  }
  return counter;
};

console.log(sumFibs(1000));
console.log(sumFibs(1));
console.log(sumFibs(4000000));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
