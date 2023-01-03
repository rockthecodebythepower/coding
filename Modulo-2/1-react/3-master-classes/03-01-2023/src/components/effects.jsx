  useEffect(() => {
    // Si quiero añadir un evento global al window, lo hago en un useEffect
    // preferiblemente con array de dependencias vacío para que pase solo al montarse
    window.addEventListener('click', (event) => {
      console.log('He clickado el elemento:', event.target);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      console.log('Pulsando tecla:', event.key);

      if (event.key === '+') {
        // Si añado un valor directamente al setState en un evento global
        // Este valor quedará desactualizado si el estado cambia su valor con respecto al inicial
        // setCount(count + 1);

        // La forma de estar al día es usar la función callback
        // de setState, que recibe el estado actual SIEMPRE.
        setCount((prevCount) => {
          return prevCount + 1;
        });
      }
    });
  }, []);