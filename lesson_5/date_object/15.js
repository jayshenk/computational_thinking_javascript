function formatTime(date) {
  var hour = date.getHours();
  var minutes = date.getMinutes();

  if (hour.length === 1) {
    hour = '0' + hour;
  }

  return hour + ':' + minutes;
}

var today = new Date;
console.log(formatTime(today));