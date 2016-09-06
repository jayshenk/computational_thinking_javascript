// 1
var title = "The Three-Body Problem";

// Use single-quotes instead of double-quotes:
var title = 'The Three-Body Problem';


// 2
var title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;

// Use a separate var declaration for each initialization; also, each variable
// should be camel-cased:
var title = 'The Three-Body Problem';
var author = 'Cixin Liu';
var pageCount = 400;


// 3
var completed = lastPageRead == 400;

// Use triple equals === instead of double equals ==
var completed = lastPageRead === 400;


// 4
if (finishedBook())
  console.log('You have finished reading this book');

// Use brackets when using multi-line if statements:
if (finishedBook()) {
  console.log('You have finished reading this book');
}

// or when single-line:
if (finishedBook()) console.log('You have finished reading this book');


// 5
function read(pages) {
      console.log('You started reading.');
      for (var i=0; i<pages; i++) {
              var message = 'You read page '+i;
              console.log(message);
      }
}

read(400);

// Indent with two spaces; add spaces between operands
function read(pages) {
  console.log('You started reading.');
  for (var i = 0; i < pages; i++) {
    var message = 'You read page ' + i;
    console.log(message);
  }
}

read(400);