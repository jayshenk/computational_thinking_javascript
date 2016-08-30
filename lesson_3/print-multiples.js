function printMultiples(number) {
  for (var i = 100; i >= 0; i--) {
    if (i % number === 0 && i % 2 !== 0) {
      console.log(i);
    }
  }
}

printMultiples(17);

printMultiples(21);