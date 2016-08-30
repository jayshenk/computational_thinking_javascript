function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(n) {
  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }

  var num1;
  var num2;

  for (var i = n - 1; i >=  n / 2; i--) {
    if (isPrime(i)) {
      num1 = i;
      num2 = n - num1;

      if (isPrime(num2)) {
        console.log(num2 + ' ' + num1);
      }
    }
  }
}
