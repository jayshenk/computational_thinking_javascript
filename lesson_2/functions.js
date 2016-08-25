function average(values) {
  return sum(values) / values.length;
}

function sum(values) {
  var total = 0;
  for (var i = 0, len = values.length; i < len; i++) {
    total += values[i];
  }

  return total;
}

console.log(sum([2, 3, 4, 7, 6]));

var temperatures = [60, 65, 78, 92, 32];
console.log(average(temperatures));
