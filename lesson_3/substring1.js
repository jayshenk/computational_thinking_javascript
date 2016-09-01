function substr(string, start, length) {
  var newString = '';
  var end;

  if (start < 0) {
    start = string.length + start;
  }

  if (begin + length > string.length) {
    end = string.length;
  } else {
    end = begin + length;
  }

  for (var i = begin; i < end; i++) {
    newString += string[i];
  }

  return newString;
}

var string = 'hello world';

console.log(substr(string, 2, 4));     // "llo "
console.log(substr(string, -3, 2));    // "rl"
console.log(substr(string, 8, 20));    // "rld"
console.log(substr(string, 0, -20));   // ""
console.log(substr(string, 0, 0));     // ""