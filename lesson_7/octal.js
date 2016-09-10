function octalToDecimal(octal) {
  var digits = octal.split('').map(function(digit) {
    return Number(digit);
  }).reverse();

  if (digits.some(function(digit) { return digit > 7; })) {
    return 0;
  }

  var decimals = digits.map(function(digit, index) {
    return digit * 8 ** index;
  });

  return decimals.reduce(function(sum, decimal) {
    return sum + decimal;
  })
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('8');           // 0
octalToDecimal('9');           // 0
octalToDecimal('6789');        // 0
octalToDecimal('011');         // 9