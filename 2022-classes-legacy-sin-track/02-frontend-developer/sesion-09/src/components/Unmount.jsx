import { useEffect } from 'react';

const Unmount = () => {
  useEffect(() => {
    console.log('Montando el componente!');

    setInterval(() => {
      console.log('Ha pasado un segundo! ⏰');
    }, 1000);

    // Lanza este código cuando el componente se desmonte
    return () => {
      console.log('Desmontando el componente!');

      // Puedo eliminar aquí dentro, intervalos, timeouts, eventos globales...
    };
  }, []);

  return <h3>Componente Unmount 🥷</h3>;
};

export default Unmount;
