function oddElementsOf(arr) {
  var oddElements = [];

  for (var i = 1; i < arr.length; i += 2) {
    oddElements.push(arr[i]);
  }

  return oddElements;
}