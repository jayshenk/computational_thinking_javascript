function missing(arr) {
  var missingNums = [];
  var start = arr[0] + 1;
  var end = arr[arr.length - 1];

  for (var i = start; i < end; i++) {
    if (arr.indexOf(i) === -1) {
      missingNums.push(i);
    }
  }

  return missingNums;
}