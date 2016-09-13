function acronym(string) {
  var words = string.split(/[- ]/);

  return words.map(function(word) { return word[0].toUpperCase() }).join('');
}

acronym('Portable Network Graphics');                 // "PNG"
acronym('First In, First Out');                       // "FIFO"
acronym('PHP: HyperText Preprocessor');               // "PHP"
acronym('Complementary metal-oxide semiconductor');   // "CMOS"
acronym('Hyper-text Markup Language');                // "HTML"