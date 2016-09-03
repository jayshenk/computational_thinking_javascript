function matrixSums(arr) {
  var sums = [];
  var currentSum;

  for (var i = 0, len = arr.length; i < len; i++) {
    var currentSum = arr[i].reduce(function(a, b) {
      return a + b;
    }, 0);
    sums.push(currentSum);
  }

  return sums;
}