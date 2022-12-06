// 1. Añade a las siguientes tres variables cualquier valor que se considere "truthy". Usa valores diferentes para cada caso.
var firstTruthyValue = 33;
var secondTruthyValue = true;
var thirdTruthyValue = 'Los strings no vacíos';

// 2. Añade a las siguientes tres variables cualquier valor que se considere "falsy". Usa valores diferentes para cada caso.
var firstFalsyValue = 0;
var secondFalsyValue = false;
var thirdFalsyValue = '';

// 3. Dadas las siguientes variables responde, justo debajo de cada una, si dicha comparación sería "true" o "false".

var firstComparison = (0 < 1);
var firstAnswer = true;

var secondComparison = (0 == '0');
var secondAnswer = true;

var thirdComparison = (0 === '0');
var thirdAnswer = false;

var fourthComparison = (0 != '0');
var fourthAnswer = false;

var fifthComparison = (0 !== '0');
var fifthAnswer = true;

var sixthComparison = (0);
var sixthAnswer = false;

var seventhComparison = ('0');
var seventhAnswer = true;

var eigththComparison = (6 >= '6');
var eigththAnswer = true;


// ///////////////////////////////////////////////////////////////
// ⬇️ NO TOCAR ESTA PARTE O ROMPERÁS LOS TESTS ⬇️
export default {
  firstTruthyValue,
  secondTruthyValue,
  thirdTruthyValue,
  firstFalsyValue,
  secondFalsyValue,
  thirdFalsyValue,
  firstAnswer,
  secondAnswer,
  thirdAnswer,
  fourthAnswer,
  fifthAnswer,
  sixthAnswer,
  seventhAnswer,
  eigththAnswer
};
// ///////////////////////////////////////////////////////////////
