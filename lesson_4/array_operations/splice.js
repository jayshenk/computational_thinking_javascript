function splice(arr, begin, number) {
  var removedValues = [];
  for (var i = begin; i < arr.length; i++) {
    if (i < begin + number) {
      removedValues.push(arr[i]);
    }

    arr[i] = arr[i + number];
  }

  arr.length = arr.length - number;
  return removedValues;
}

var count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));        // [ 3, 4, 5, 6, 7 ]
console.log(count);                      // [ 1, 2, 8]