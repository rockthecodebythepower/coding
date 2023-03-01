// kayak => kayak ✅
// zebra => arbez ❌
// A santa at nasa ✅

// Devuelve true si la palabra o frase que recibe la función es palíndromo
const isPalindrome = (word) => {
  // Primero separo el string de la palabra y lo convierto en un array de letras
  const splitWord = word.split('');
  // Le doy la vuelta al array de letras
  const reverseLetters = splitWord.reverse();
  // Uno el array de letras en un string con todo pegado
  const reverseWord = reverseLetters.join('');

  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }

  // const areTheSame = word === reverseWord;
  // return areTheSame;
};

console.log(isPalindrome('kayak'));
console.log(isPalindrome('zebra'));

const isPalindromeSentence = (sentence) => {
  // Limpio la frase original de espacios y regulo todo a mayúsculas
  const splitSentenceBySpaces = sentence.split(' ');
  const cleanOriginalSentence = splitSentenceBySpaces.join('');
  const upperCaseSentence = cleanOriginalSentence.toUpperCase();
  console.log(upperCaseSentence);

  // La frase original limpia de espacios y en mayúscula, le doy la vuelta
  const splitSentence = upperCaseSentence.split('');
  const reverseSentence = splitSentence.reverse();
  const joinSentence = reverseSentence.join('');
  console.log(joinSentence);

  if (upperCaseSentence === joinSentence) {
    return true;
  } else {
    return false;
  }
};

// const isPalindromeSentence = (sentence) =>
//   sentence.split(' ').join('').toUpperCase() === sentence.split(' ').reverse().join('').toUpperCase();

console.log(isPalindromeSentence('A santa at nasa'));
