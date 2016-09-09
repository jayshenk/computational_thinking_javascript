function myReduce(array, func, initial) {
  var result;
  var start;

  if (initial) {
    result = initial;
    start = 0;
  } else {
    result = array[0];
    start = 1;
  }

  for (var i = start; i < array.length; i++) {
    result = func(result, array[i]);
  }

  return result;
}

var smallest = function(result, value) {
  return result <= value ? result : value;
};

myReduce([5, 12, 15, 1, 6], smallest);