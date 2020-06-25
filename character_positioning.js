
function countLetters(letters) {
  var letterCount = {};

  for( var i = 0; i < letters.length; i++ ) {
    debugger;
    letterCount[ letters[i] ] = letterCount[ letters[ i ] ] || [];
    letterCount[ letters[ i ] ].push( i );
  }
  delete letterCount[ ' ' ];
  return letterCount;
}



console.log(countLetters("lighthouse in the house"));