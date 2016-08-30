function gcd(num1, num2) {
  var divisor = Math.min(num1, num2);

  while (true) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      return divisor;
    }
    
    divisor--;
  }
}
