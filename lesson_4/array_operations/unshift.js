function unshift(arr, value) {
  for (var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = value;
  return arr.length;
}

var numbers = [1, 2, 3];
console.log(unshift(numbers, 0));      // 4
console.log(numbers);                  // [0, 1, 2, 3]