function wordCount(string) {
  var count = {};
  var keys = string.split(' ');
  var current_key;

  for (var i = 0; i < keys.length; i++) {
    current_key = keys[i];
    if (count[current_key]) {
      count[current_key] += 1;
    } else {
      count[current_key] = 1;
    }
  }

  return count;
}

wordCount('box car cat bag box');    // { box: 2, car: 1, cat: 1, bag: 1 }