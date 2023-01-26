// Contar el número de estudiantes cuyo nombre empieza por la letra J (mayúscula o minúscula)
const countStudentsWithJ = (students) => {
  // let counter = 0;

  // for (let i = 0; i < students.length; i++) {
  //   const firstLetter = students[i][0];

  //   if (firstLetter === 'J' || firstLetter === 'j') {
  //     counter += 1;
  //   }
  // }

  // return counter;

  const filteredStudents = students.filter((student) => {
    const firstLetter = student[0];
    const startsWithJ = firstLetter === 'J' || firstLetter === 'j';

    return startsWithJ;
  });

  console.log(students);
  console.log(filteredStudents);

  return filteredStudents.length;
};

// Ejemplo
const students = ['Alejandro90', 'Bea', 'Gk', 'JDebug-Manu', 'jose Angel', 'Juan Ocaña'];
const count = countStudentsWithJ(students);
console.log(count);

// Dado un array de estudiantes con la nota de un test, devuelve un array con los que han sacado más (o igual) de un 7
const filterStudentsWithMoreThanSeven = (studentsWithScores) => {
  // const moreThanSeven = [];

  // for (let i = 0; i < studentsWithScores.length; i++) {
  //   const student = studentsWithScores[i];

  //   if (student.score >= 7) {
  //     moreThanSeven.push(student);
  //   }
  // }

  // return moreThanSeven;

  const filteredStudents = studentsWithScores.filter((student) => {
    const hasMoreThanSeven = student.score >= 7;
    return hasMoreThanSeven;
  });

  return filteredStudents;
};

// const filterStudentsWithMoreThanSeven = (studentsWithScores) =>
//   studentsWithScores.filter((student) => student.score >= 7);

const scores = [
  { name: 'JDebug-Manu', score: 7 },
  { name: 'jose Angel', score: 1 },
  { name: 'Juan Ocaña', score: 8 },
];
const result = filterStudentsWithMoreThanSeven(scores);
console.log(result);
