function anagram(word, list) {
  var anagrams = [];
  var sorted_word = word.split('').sort().join();
  var sorted_wrd;

  list.forEach(function(wrd) {
    sorted_wrd = wrd.split('').sort().join();

    if (sorted_word === sorted_wrd) {
      anagrams.push(wrd);
    }
  });

  return anagrams;
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']); // [ "inlets" ]
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);  // [ "enlist", "inlets" ]