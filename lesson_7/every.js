function myOwnEvery(array, func) {
  var result = true;

  array.forEach(function(value) {
    if (!func(value)) {
      result = false;
    }
  });

  return result;
}

var isAString = function(value) {
  return typeof value === 'string';
};

myOwnEvery(['a', 'a234', '1abc'], isAString);