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

isPrime(1);
isPrime(2);
isPrime(3);
isPrime(43);
isPrime(55);
isPrime(0);