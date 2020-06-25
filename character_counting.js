
function countLetters(letters) {
  var letterCount = {};

  for( var letter of letters ) {
    letterCount[ letter ] = letterCount[ letter ] || 0;
    letterCount[ letter ] += 1;
  }
  delete letterCount[ ' ' ];
  return letterCount;
}



console.log(countLetters("lighthouse in the house"));