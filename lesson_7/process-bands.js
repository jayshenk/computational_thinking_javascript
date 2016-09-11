var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  var formatted_name;

  data.forEach(function(obj) {
    formatted_name = obj.name.replace('.', '').split(' ').map(function(word) {
      return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
    obj.name = formatted_name;
    obj.country = 'Canada';
  });

  return data;
}

processBands(bands);

// [ { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]