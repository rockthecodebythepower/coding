import { useState } from 'react';

const Toggle = ({ name }) => {
  // Uso useState en el nivel más bajo posible de mi arbol de componentes
  const [toggle, setToggle] = useState(false);

  return (
    <div className="toggle-wrapper">
      <div
        className={`lightbulb ${toggle ? 'on' : 'off'}`}
      ></div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? 'Apagar' : 'Encender'}
      </button>
    </div>
  );
};

export default Toggle;
