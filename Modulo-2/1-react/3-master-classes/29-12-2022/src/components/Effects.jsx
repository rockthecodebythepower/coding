import { useEffect, useState } from 'react';

const Effects = () => {
  const [count, setCount] = useState(0);

  // Un efecto no devuelve nada, es código que se lanza por su cuenta bajo ciertas condiciones
  // La función del useEffect se lanza en algún(os) momento(s) del ciclo de vida del componente
  // Está limitada por el segundo argumento, el array de dependencias
  // - Se lanza mínimo una vez: cuando el componente se monta.
  // - Si NO HAY array de dependencias, la función de useEffect se lanza en cada RENDER.
  // - Si el array de dependencias está VACIO, la función de useEffect se lanza solo al montarse.
  // - Si hay dependencias en el array, la función de useEffect se lanza cuando cambia una de estas.
  useEffect(() => {
    // console.log('El valor de count ha cambiado!', count);
    if (count === 10) {
      alert('Te ha tocado un descuento!');
    }

    // Se lanza también cuando el componente se rerenderiza, para limpiar el efecto anterior
    return () => {
      console.log(
        'El componente Effects se ha desmontado!'
      );
    };
  }, [count]);

  const [mascot, setMascot] = useState({
    name: 'tambor',
    type: 'dog',
  });

  useEffect(() => {
    console.log(
      '🐶🐶🐶 La mascota ha cambiado! Su nombre es',
      mascot.name
    );
  }, [mascot]);

  const person = {
    name: 'Cristian',
  };

  // Idealmente, intentaré tener valor primitivos tipo string, number o boolean en el array de dependencias
  // Los objetos y arrays no son comparables entre si (normalmente) por lo que sería como tener algo que siempre cambia
  useEffect(() => {
    console.log('Ha cambiado el objeto person!');
  }, [person]);

  useEffect(() => {
    console.log('UseEffect: El componente se ha montado!');
  }, []);

  return (
    <div>
      <h2>Pulsa hasta 10 y tendrás una sorpresa 🎉</h2>
      <h3>La cuenta vale: {count}</h3>
      <button
        onClick={() => setCount(count + 1)}
        disabled={count >= 10}
      >
        Sumar
      </button>
    </div>
  );
};

export default Effects;
