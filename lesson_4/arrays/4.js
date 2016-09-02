function index(value, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}

console.log(index(2, [1, 2, 3]));
console.log(index(9, [1, 2, 3]));