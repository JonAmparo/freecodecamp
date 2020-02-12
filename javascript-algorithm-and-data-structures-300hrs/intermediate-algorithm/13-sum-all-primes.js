function sumPrimes(num) {
  const array = [];

  // Decrements sumPrimes param "num" until it's 0
  for (let primeNum = num; primeNum > 0; primeNum--) {
    // Increments divide until it's greater than or equal to primeNum
    for (let divide = 2; divide <= primeNum; divide++) {
      // If they are equal, then it's a prime number match!
      if (divide === primeNum) {
        array.push(primeNum);
      // else if it's true, it's not a prime number
      } else if (primeNum % divide === 0) {
        break;
      }
    }
  }
  // 
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

sumPrimes(10);
