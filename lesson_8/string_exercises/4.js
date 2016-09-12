// 4.
var language = 'JavaScript';
var idx = language.indexOf('S');
console.log(idx);

// 5.
charCode = language.charCodeAt(idx);
console.log(charCode);

// 6.
console.log(String.fromCharCode(charCode));

// 7.
console.log(language.lastIndexOf('a'));

// 8.
var a = 'a';
var b = 'b';

console.log(a > b);
b = 'B';
console.log(a > b);

// 9.
var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

// 10.
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));