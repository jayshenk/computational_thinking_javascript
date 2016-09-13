function isUrl(text) {
  return !!text.match(/^https?:\/\/\S+$/);
}

isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false