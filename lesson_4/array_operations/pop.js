function pop(arr) {
  var newLength = arr.length - 1;
  var value = arr[newLength];
  arr.length = newLength;
  return value;
}

var count = [1, 2, 3];
pop(count);           // 3
count;                // [1, 2]