function toLowerCase(string) {
  var lowered = '';
  var asciiNumeric;

  for (var i = 0; i < string.length; i++) {
    asciiNumeric = string.charCodeAt(i);

    if (asciiNumeric > 64 && asciiNumeric < 91) {
      asciiNumeric += 32;
    }

    lowered += String.fromCharCode(asciiNumeric);
  }

  return lowered;
}

console.log(toLowerCase('ALPHABET'));      // "alphabet"
console.log(toLowerCase('123'));           // "123"
console.log(toLowerCase('abcDEF'));        // "abcdef"