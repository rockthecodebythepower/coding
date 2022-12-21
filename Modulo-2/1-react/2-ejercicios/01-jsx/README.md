**Ejercicio JSX**
---

Ha llegado el momento de ponerse a trabajar con ReactJS, para ello os proponemos una pequeña práctica que os ayude afianzar el funcionamiento de `JSX`.

1. Crea una aplicación de ReactJS con vite → name: jsx-basics.
2. Renderiza “Buenos días” [6-12] , “Buenas tardes” [13-19] o “Buenas noches”[20-5] según el valor numérico asignado. -> usa un ternario para pintar el mensaje adecucuado en base a un state.
3. Recorrer los elementos de un array y renderizalos ⇒ Si os da un error de keys en la consola podéis usar el index como `key={index}` . Genera primero los elementos dentro de un array y guardalo en un state para poder renderizarlo con un map.
4. Mappea un array de objectos en los que transformes alguna de sus propiedades y renderiza los elementos. Cambia los valores del array puesto que usáis un map para transformar la infomación.
5. Crea un botón que modifique un valor de false a true y renderice un contenido cuando este valor se modifique. -> Usa un state y un evnto para modificar dicho state -> cuando clickes sobre este modifica y en base a ese valor con un ternario pinta un mensaje.