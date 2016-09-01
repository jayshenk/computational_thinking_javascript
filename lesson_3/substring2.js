function substring(string, start, end) {
  var newString = '';

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (end < start) {
    var temp = start;
    start = end;
    end = temp;
  }

  if (end > string.length) {
    end = string.length;
  }

  for (var i = start; i < end; i++) {
    newString += string[i];
  }

  return newString;
}

var string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"