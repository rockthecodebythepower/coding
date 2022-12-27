# 09 - Efectos - II

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

Esta vez no te daremos tantas pistas! Allá vamos...!

Crea una aplicación que muestre la hora actual en formato HH:mm:ss.

1. En el componente `App`, crea un estado llamado `time` que inicialmente tenga como valor un string vacío `''`.
2. Utiliza la función `setInterval` para que en cada segundo (1000 ms) se actualice el estado `time` con la hora actual en formato `HH:mm:ss`.
3. Utiliza la función `clearInterval` para limpiar el intervalo cuando el componente se desmonte. Recuerda que para esto, puedes devolver una función al final de tu función principal de useEffect para limpiar intervalos, aquí un ejemplo:

```jsx
useEffect(() => {
  // Contenido de mi useEffect...

  return () => {
    // Código que se lanza cuando el componente se demonta o rerenderiza, útil para limpiar intervalos y eventos globales.
  };
}, []);
```

4. Muestra la hora actual en la pantalla.
5. ¡Dale estilos para que parezca un reloj digital! ⏰
