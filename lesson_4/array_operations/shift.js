function shift(arr) {
  var removed = arr[0];

  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return removed;
}

var numbers = [1, 2, 3];
console.log(shift(numbers));           // 1
console.log(numbers);                  // [2, 3]