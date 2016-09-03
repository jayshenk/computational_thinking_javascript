function combinedArray(even, odd) {
  var combined = [];

  for (var i = 0, len = even.length; i < len; i++) {
    combined.push(even[i]);
    combined.push(odd[i]);
  }

  return combined;
}