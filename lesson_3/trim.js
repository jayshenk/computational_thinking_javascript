function startIndex(str) {
  for (i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return i;
    }
  }

  return null;
}

function endIndex(str) {
  for (i = str.length - 1; i > 0; i--) {
    if (str[i] !== ' ') {
      return i;
    }
  }

  return null;
}

function trim(str) {
  var trimmedStr = '';
  var begin = startIndex(str);
  var end = endIndex(str);

  if (begin < end) {
    for (i = begin; i <= end ; i++) {
      trimmedStr += str[i];
    }
  }
  
  return trimmedStr;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""