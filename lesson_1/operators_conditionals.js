// 1
var apples = 3;
var bananas = 5;

if (apples == bananas) {
  console.log('Apples equals Bananas');
}

// 2
bananas = '3'

if (apples == bananas) {
  console.log('Apples equals Bananas');
}

// 3
if (apples === bananas) {
  console.log('Strict equal!');
}
// No output because === requires type to be the same

// 4
if (apples === bananas) {
  console.log('Strict equal!');
} else {
  console.log('This logs');
}

// 5
if (apples === bananas) {
  console.log('Strict equal!');
} else if (apples == bananas) {
  console.log('Same number, but different types')
} else {
  console.log('Not strictly equal :(');
}

// 6
if (apples === bananas) {
  console.log('Strict equal!');
} 
else {
  if (apples == bananas) {
    console.log('Same number, but different types');
  }
  else {
    console.log('Not strictly equal :(');
  }
}

// 7
apples = 3;
bananas = 3;
var areEqual = apples === bananas;

console.log(areEqual);

// 8
apples = 3;
bananas = undefined;
var eitherOr = apples || bananas;

console.log(eitherOr);

// 9
apples = 3;
bananas = 1;
eitherOr = apples || bananas;

console.log(eitherOr);

eitherOr = bananas || apples;

console.log(eitherOr);

// 10
var lastName;
var familyMessage;

lastname = 'Shenk'
familyMessage = lastname === 'Shenk' ? 'You\'re part of the family!' : 'You\'re not family.'

console.log(familyMessage);
