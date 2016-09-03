function lastNOf(arr, length) {
  var index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

var digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3); // Returns [16, 23, 42]
lastNOf(digits, 8); // Returns [4, 8, 15, 16, 23, 42]