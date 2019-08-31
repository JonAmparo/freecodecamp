function diffArray(arr1, arr2) {
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(arr2.filter(el => !arr1.includes(el)));
}

// test here
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
