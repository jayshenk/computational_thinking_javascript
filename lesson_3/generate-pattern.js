function generatePattern(n) {
  var num_str = '';

  for (var i = 1; i <= n; i++) {
    num_str += String(i);
    asterisks = '*'.repeat(n - i);
    console.log(num_str + asterisks);
  }
}