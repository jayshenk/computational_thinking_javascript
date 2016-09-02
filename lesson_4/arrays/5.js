function toString(arr) {
  var string = '';

  for (var i = 0; i < arr.length; i++) {
    string += arr[i];
  }

  return string;
}

console.log(toString([1, 2, 3]));
