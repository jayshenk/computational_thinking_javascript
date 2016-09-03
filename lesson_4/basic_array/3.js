function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3); // Returns 16
nthElementOf(digits, 8); // Returns undefined
nthElementOf(digits, -1); // Returns undefined