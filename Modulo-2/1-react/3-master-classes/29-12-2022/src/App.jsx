import { useState, useEffect } from 'react';
import './App.css';
import Toggle from './components/Toggle';
import Effects from './components/Effects';
import Unmount from './components/Unmount';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <h1>useState & useEffect</h1>

      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        Montar/Desmontar
      </button>

      {visible ? <Unmount /> : null}
      <hr />

      <Effects />

      <hr />
      <Toggle />
    </div>
  );
}

export default App;
