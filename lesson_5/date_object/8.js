function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

function dateSuffix(date) {
  var suffix = 'th';
  var dateString = date.getDay().toString();
  var digit;

  if (dateString.length === 1) {
    digit = dateString[0];
  } else if (dateString[0] !== '1') {
    digit = dateString[1];
  }

  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }

  return digit + suffix;
}

function formattedDate(date) {
  var month = formattedMonth(date);
  var day = formattedDay(date);
  var suffix = dateSuffix(date);

  return day + ', ' + month + ' ' + suffix;
}

var today = new Date();
console.log("Today's day is " + formattedDate(today));