function factorialize(num) {
  var factored = 1;

  for (var i = 1; i <= num; i++) {
    factored *= i;
  }

  return factored;
}

factorialize(5);
