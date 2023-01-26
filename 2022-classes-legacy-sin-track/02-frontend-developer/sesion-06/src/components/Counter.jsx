import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increaseCountOnPlus = (event) => {
      if (event.key === '+') {
        setCount(count + 1);
      }
    };

    window.addEventListener('keydown', increaseCountOnPlus);

    // Función cleanup, se lanza cuando se vuelve a ejecutar el useEffect
    // o cuando el componente se desmonta
    return () => {
      window.removeEventListener(
        'keydown',
        increaseCountOnPlus
      );
    };
  }, [count]);

  return (
    <div>
      <h3>Contador {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Sumar
      </button>
    </div>
  );
};

export default Counter;
