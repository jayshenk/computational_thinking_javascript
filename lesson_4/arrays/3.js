function reverse(arr) {
  var reversed = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

var numbers = [1, 2, 3, 4, 5];
console.log(reverse(numbers));