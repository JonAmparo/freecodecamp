function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) { 
    return a - b; // Ascending to descending
  });

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i; // If array is greater than array index, return i
    }
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);
