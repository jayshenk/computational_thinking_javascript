function repeatedCharacters(string) {
  var count = {};
  var chars = string.toLowerCase();
  var char;

  for (var i = 0, len = chars.length; i < len; i++) {
    char = chars[i];
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  for (char in count) {
    if (count[char] < 2) {
      delete count[char];
    }
  }
  
  return count;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }