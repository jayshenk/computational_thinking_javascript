function firstNOf(arr, length) {
  return arr.slice(0, length);
}

var digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3)); // Returns [4, 8, 15]