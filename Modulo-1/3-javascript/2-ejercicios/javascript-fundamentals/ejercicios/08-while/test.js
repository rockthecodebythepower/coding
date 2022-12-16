var customString = 'alpaca';
var ex2 = '';
let j = 0;
  let vowels = 0;
  while (j < customString.length) {
    var letter = customString[j];

    if (letter === 'a' || 'e' || 'i' || 'o' || 'u' ) {
      vowels += 1;
    }
    
    j++;
    console.log('letra', letter, 'j', j, 'vocales:', vowels)
  }

  if (vowels > 3) {
    ex2 = customString.toUpperCase();
  } else ex2 = customString;
