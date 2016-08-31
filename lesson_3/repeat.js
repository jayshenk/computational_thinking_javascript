function repeat(string, times) {
  if (times < 0 || isNaN(times)) {
    return undefined;
  }

  var repeated = ''; 

  for (i = 1; i <= times; i++) {
    repeated += string;
  }

  return repeated;
}

console.log(repeat('abc', 1));    // "abc"
console.log(repeat('abc', 2));    // "abcabc"
console.log(repeat('abc', -1));   // undefined
console.log(repeat('abc', 0));    // ""
console.log(repeat('abc', 'a'));  // undefined