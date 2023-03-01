import { useState } from 'react';
import './App.css';

// let count = 0; ❌ No provoca un rerender del componente cuando cambia

function App() {
  const [randomNumber, setRandomNumber] = useState(
    Math.random()
  );
  // const randomNumber = Math.random();

  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [school, setSchool] = useState('Rock{theCode}');

  console.log('>>>> Renderizando App');
  console.log('>>>> El valor de count en App es:', count);

  const substractOne = () => setCount(count - 1);
  const addOne = () => setCount(count + 1);
  const substractThree = () => {
    // Si quiero cambiar el mismo estado muchas veces, uso la función flecha dentro del setState
    // Recoge el valor del estado justo en el momento en el que React lo cambia internamente
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };

  // setCount(count - 1); ❌ no debemos invocar un setState a este nivel o provocaremos renders infinitos

  return (
    <div className="App">
      <h1>Hooks y ciclos de vida</h1>
      <h2>Estudio en {school}</h2>

      {/* ❌ no debemos invocar un setState a este nivel o provocaremos renders infinitos */}
      {/* {setCount(count - 1)} */}

      <h3>El número random vale: {randomNumber}</h3>
      <h3>La cuenta vale: {count}</h3>

      {/* <button onClick={() => substractOne()}>
      <button onClick={() => setCount(count - 1)}> */}
      <button onClick={substractOne}>Restar uno</button>
      <button onClick={substractThree}>Restar tres</button>

      {/* <button
        onClick={() => {
          console.log('Antes del setCount vale:', count);
          setCount(count + 1); // ✅ Provoca un rerender del componente y veo el DOM actualizado
          console.log('Después del setCount vale:', count);
          // count += 1; ❌ No provoca un rerender del componente
        }}
      > */}
      <button onClick={addOne}>Sumar uno</button>

      <div>
        <h2>{text}</h2>
        <button
          onClick={() => {
            setText('RESET');
          }}
        >
          Resetar texto
        </button>

        <input
          type="text"
          name="content"
          id="content"
          // Input controlado por medio de un state
          value={text}
          onChange={(event) => {
            const inputValue = event.target.value;
            setText(inputValue);
          }}
        />
      </div>
    </div>
  );
}

// 1. console.log count = 0
// 3. console.log count = 0
// 2. setCount ⏰ count = 1 => repinto el componente

export default App;
