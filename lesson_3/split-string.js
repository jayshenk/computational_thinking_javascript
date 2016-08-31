function splitString(string, delimiter) {
  var word = '';

  for (var i = 0; i < string.length; i++) {
    if (delimiter === '') {
      console.log(string[i]);
    } else if (string[i] === delimiter) {
      console.log(word);
      word = '';
    } else if (i === string.length - 1) {
      word += string[i];
      console.log(word);
    } else {
      word += string[i];
    }
  }
}

console.log(splitString('abc,123,hello world', ','));
console.log(splitString('hello'));
console.log(splitString('hello', ''));
console.log(splitString('hello', ';'));
console.log(splitString(';hello;', ';'));