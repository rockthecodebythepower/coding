// Contar el número de estudiante cuyo nombre empieza por la letra J (mayúscula o minúscula)
const countStudentsWithJ = (students) => {
  let counter = 0;

  // for (let i = 0; i < students.length; i++) {
  //   const firstLetter = students[i][0];

  //   if (firstLetter === 'J' || firstLetter === 'j') {
  //     counter += 1;
  //   }
  // }

  students.forEach((student) => {
    const firstLetter = student[0];

    if (firstLetter === 'J' || firstLetter === 'j') {
      counter += 1;
    }
  });

  return counter;
};

// Ejemplo
const students = ['Alejandro90', 'Bea', 'Gk', 'JDebug-Manu', 'jose Angel', 'Juan Ocaña'];
const count = countStudentsWithJ(students);
console.log(count);
