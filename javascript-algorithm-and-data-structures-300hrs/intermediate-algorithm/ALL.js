// b2
function reverseString(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

reverseString('hello');

// b3
function factorialize(num) {
  var factored = 1;

  for (var i = 1; i <= num; i++) {
    factored *= i;
  }

  return factored;
}

factorialize(5);

// b4
function findLongestWordLength(str) {
  var maxLength = 0;
  var words = str.split(' ');

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

// b5

function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}

//b6
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.substr(-target.length) === target ? true : false;
}

confirmEnding('Bastian', 'n');

// b7
function repeatStringNumTimes(str, num) {
  // repeat after me
  var string1 = '';

  if (num > 0) {
    for (var i = 0; i < num; i++) {
      string1 += str;
    }
  } else {
    return '';
  }
  return string1;
}

repeatStringNumTimes('abc', 3);

// b8
function truncateString(str, num) {
  if (num > 3) {
    if (str.length > num) {
      str = str.slice(0, num);
      str = str.concat('...');
    }
    return str;
  } else {
    str = str.slice(0, num);
    str = str.concat('...');
  }
  return str;
}

// b9
function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// b10
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
  return typeof bool === 'boolean';
}

// test here
booWho2(null);

// b11
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(' ');
  var result = convertToArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(' ');
}

titleCase("I'm a little tea pot");

// b12
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }

  return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// b13
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

bouncer([7, 'ate', '', false, 9]);

// b14
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

// b15
function mutation(arr) {
  let string1 = arr[0].toLowerCase();
  let string2 = arr[1].toLowerCase();

  for (var i = 0; i < string2.length; i++) {
    if (string1.indexOf(string2[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(['hello', 'hey']);

// b16
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

// 1
function sumAll(arr) {
  var sum = 0;

  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

// 2
function diffArray(arr1, arr2) {
  return arr1
    .filter(el => !arr2.includes(el))
    .concat(arr2.filter(el => !arr1.includes(el)));
}

// test here
diffArray(
  ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
  ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
);

// 3
function destroyer(arr) {
  var args = [...arr].slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//4
function whatIsInAName(collection, source) {
  // What's in a name?
  var srcKeys = Object.keys(source);
  // Only change code below this line
  return collection.filter(obj => {
    for (var i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}
// Only change code above this line}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);

// ============================================================

function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// test here
whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
);

// 5
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str
    .split(/\s+|_|W+|(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');

// 6
function translatePigLatin(str) {
  var firstVowel = str.match(/[aeiou]/);
  var firstIndex = str.indexOf(firstVowel);

  console.log(firstIndex);

  if (firstIndex >= 1) {
    return str.slice(firstIndex) + str.slice(0, firstIndex) + 'ay';
  } else if (firstIndex == 0) {
    return str + 'way';
  }
  return str + 'ay';
}

translatePigLatin('nnn');
// translatePigLatin("nn");
// translatePigLatin("consonant");

// 7
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  console.log('Index Before: ' + index);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // console.log("String Index 1: " + str[index]);
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
    console.log('After if statement: ' + after);
  }
  // Now replace the original str with the edited one.
  console.log('String Index 2: ' + str[index]);
  str = str.replace(before, after);

  return str;
}
// test here
myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting');
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// 8
const pairElement = str => {
  const pairs = {
    A: 'AT',
    T: 'TA',
    C: 'CG',
    G: 'GC'
  };

  return str.split('').map(e => pairs[e].split(''));
};

// 9
const fearNotLetter = str => {
  for (let i = 0; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
};

console.log('Missing letter: ' + fearNotLetter('abce'));
console.log('Missing letter: ' + fearNotLetter('abcdefghjklmno'));
console.log('Missing letter: ' + fearNotLetter('stvwx'));
console.log('Missing letter: ' + fearNotLetter('bcdf'));
console.log('Missing letter: ' + fearNotLetter('abcdefghjklmno'));

// 10
const uniteUnique = (...arr) => {
  const allArr = [].concat(...arr);

  return [...new Set(allArr)];
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));

// 11
function convertHTML(str) {
  //Chaining of replace method with different arguments
  str = str
    .replace(/[&]+/g, '&amp;')
    .replace(/[<]+/g, '&lt;')
    .replace(/[>]+/g, '&gt;')
    .replace(/["]+/g, '&quot;')
    .replace(/[']+/g, '&apos;');
  return str;
}

// test here
convertHTML('Dolce & Gabbana');

// 12
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

// 13

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

// 14
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

// 20
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return '';
  };
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
