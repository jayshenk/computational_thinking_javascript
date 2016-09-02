function push(arr, value) {
  arr[arr.length] = value;
  return value;
}

var count = [1, 2, 3];
console.log(push(count, 4));    // 4
console.log(count);             // [1, 2, 3, 4]