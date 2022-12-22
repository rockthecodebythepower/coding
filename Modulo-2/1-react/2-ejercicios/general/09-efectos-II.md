# 09 - Efectos - II

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado
Esta vez no te daremos tantas pistas! Allá vamos...!

Crea una aplicación que muestre la hora actual en formato HH:mm:ss.

1. En el componente `App`, crea un estado llamado `time` que inicialmente tenga el valor `''`.
2. Utiliza la función `setInterval` para que en cada segundo (1000 ms) se actualice `time` con la hora actual en formato HH:mm:ss.
3. Utiliza la función `clearInterval` para limpiar el intervalo cuando el componente se desmonte.
4. Muestra la hora actual en la pantalla.