function formatYear(date) {
  return date.getYear() + 1900;
}

var today = new Date;
console.log(formatYear(today));