function copyProperties(firstObject, secondObject) {
  for (property in firstObject) {
    secondObject[property] = firstObject[property];
  }

  return Object.keys(secondObject).length;
}

var hal = {
  model: 9000,
  enabled: true,
};
var sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }