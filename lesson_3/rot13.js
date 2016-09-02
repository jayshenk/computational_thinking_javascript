function rot13(string) {
  var ciphered = '';
  var charCode;

  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    if (charCode >= 65 && charCode < 78 ||
        charCode >= 97 && charCode < 110) {
      charCode += 13;
    } else if (charCode >= 78 && charCode <= 90 ||
               charCode >= 110 && charCode <= 122) {
      charCode -= 13;
    }

    ciphered += String.fromCharCode(charCode);
  }

  return ciphered;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// Teachers open the door, but you must enter by yourself.