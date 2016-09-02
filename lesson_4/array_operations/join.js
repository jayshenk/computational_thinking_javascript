function join(arr, delimiter) {
  var newStr = '';
  for (var i = 0; i < arr.length; i++) {
    newStr += arr[i].toString();
    if (i === arr.length - 1) {
      break;
    }

    newStr += delimiter;
  }

  return newStr;
}

console.log(join(['bri', 'tru', 'wha'], 'ck ')); // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));           // '1 and 2 and 3'