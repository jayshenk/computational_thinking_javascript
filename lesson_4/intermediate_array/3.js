function mirroredArray(arr) {
  var arrReversed = arr.slice().reverse();
  return arr.concat(arrReversed);
}