function totalArea(rectangles) {
  var areas = rectangles.map(function(rectangle) {
    return rectangle[0] * rectangle[1];
  });

  return areas.reduce(function(sum, area) {
    return sum + area;
  });
}

function totalSquareArea(rectangles) {
  var squares = rectangles.filter(function(rectangle) {
    return rectangle[0] === rectangle[1];
  });

  return totalArea(squares);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);       // 141
totalSquareArea(rectangles); // 121