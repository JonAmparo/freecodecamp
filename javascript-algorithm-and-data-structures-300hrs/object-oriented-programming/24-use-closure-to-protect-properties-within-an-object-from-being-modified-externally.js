function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  };
}
let penguin = new Bird();
penguin.getWeight();
