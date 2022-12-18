const firstStudents = ['rubén', 'juan'];
const secondStudents = ['alejandro', 'yeti'];

const allStudents = [...firstStudents, 'angela', ...secondStudents];

console.log(allStudents);

const copyFirstStudents = [...firstStudents];
// const copyFirstStudents = firstStudents.slice()

firstStudents.push('pablo');
console.log(firstStudents);

console.log(copyFirstStudents);

// /////////
const dogsArray = [
  {
    name: 'Antonia',
    mood: 'happy',
  },
  {
    name: 'Margarita',
    mood: 'angry',
  },
  {
    name: 'Julio',
    mood: 'serious',
  },
];

// DEEP COPY !== SHALLOW COPY
// const copyDogsArray = structuredClone(dogsArray) // DEEP COPY => Puede hacer falta el polyfill para navegadores antiguos!
const copyDogsArray = [...dogsArray]; // SHALLOW COPY
// const copyDogsArray = dogsArray.slice()
// const copyDogsArray = JSON.parse(JSON.stringify(dogsArray)) // MALA PRACTICA ❌

dogsArray[0].mood = 'hungry';
console.log(dogsArray);

console.log(copyDogsArray);

const dogJSON = JSON.stringify({
  name: 'Julio',
  mood: 'serious',
});
console.log(dogJSON);

const dogObject = JSON.parse(dogJSON);
console.log(dogObject);
