# Proyecto 6: Hub de Juegos

## Enunciado de proyecto

¡Lo has hecho muy bien para haber llegado hasta aquí! Ahora que estamos entrando a la recta final  vamos a avanzar en módulo de `React` haciendo algo grande.

Este proyecto no será un proyecto al uso en el que nos centraremos en una sola temática, es tu turno de elegir y aprender a valorar tu alcance tras haber aprendido tantísimo en estos meses 🎉

**Proyecto propuesto**

Este proyecto puede llevarse al alcance que cada cual estime posible dentro de lo que hemos aprendido y sabemos poner el práctica. Vamos a crear un `**Hub de juegos`** en el que tendremos tres actividades sobre las que elegir.

- **Tres en Raya o Tic-Tac-Toe**
    
    Tendrás que usar React Router para crear una página o ruta específica para este juego en `/tictactoe`. En la pantalla encontraremos:
    
    - **Un botón para comenzar partida**, que dependa del estado `isStarted`, esta será un `boolean`. Si el juego ha comenzado, el botón debe poder acabar la partida en cualquier momento y resetear la información.
    - **Un mensaje que indique el jugador actual**. Como en este juego usaremos el símbolo `X` para un jugador y el `O` para otro (¡puedes cambiarlos a tu gusto, usa emojis si prefieres!), informaremos de esto en el mensaje.  Por ejemplo: `Es el turno de X` o `Es el turno de O`.
    - Un tablero que será un estado que actualizaremoz, y consistirá de un array de arrays de 3x3 en el que tendremos cada `casilla` o `celda` con un valor inicial `null`, aquí un ejemplo:
        
        ```jsx
        [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ]
        ```
        
    
    - Cada celda podrá ser un botón que, al ser clickado, añada el símbolo del jugador al array:
        
        ```jsx
        [
          ['X', null, null],
          ['O', 'X', null],
          [null, null, 'O'],
        ]
        ```
        
    
    - Usando un sistema de turnos a través de otro elemento del estado, validaremos si el juego ha terminado cuando un jugador haya conseguido que su símbolo correspondiente esté repetido en las siguientes condiciones:
        
        ```jsx
        1 - Todas las celdas de una fila son del mismo símbolo
        2 - Todas las celdas de una columna son del mismo símbolo
        3 - Todas las celdas de una diagonal son del mismo símbolo
        ```
        
    
    - Te recomendamos comprobar cada caso por separado siempre que un jugador cualquiera añada un nuevo símbolo al tablero (`useEffect` podría ser buena idea para lanzar la comprobación).
    - Cuando el tablero se llene sin un jugador ganador, tendremos un empate y el juego terminará y todo volverá al estado original.
    
    Aquí te dejamos un GIF de ejemplo (haz tu tres en raya más bonito 🙏):
    
    ![tictactoe.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5a7fd115-a1f0-4188-b29b-1b4e2a2e44e7/tictactoe.gif)
    
- **Juego del ahorcado o Hangman**
    
    Tendrás que usar React Router para crear una página o ruta específica para este juego en `/hangman`.
    
    Para empezar, te recomendamos que busques una lista de N palabras (10 como mínimo) para jugar al ahorcado.
    
    Ahora, esperaremos que la pantalla contenga:
    
    - Crea un botón de empezar partida que al ser clickado recoja una palabra aleatoría del array de palabras y genere la pista inicial:
    
    ```jsx
    Palabra: 'Coche'
    
    Pista: _ _ _ _ _
    ```
    
    - Crea ahora un sistema de input de letras por parte de los usuarios, ya sea un conjunto de botones con el abecedario, un input, que cada letra de la pista sea un botón inicialmente... Te dejamos libertad completa, la idea es que el usuario podrá clickar o introducir letras en el juego para ser usadas en la solución 💡
    - Cada vez que un usuario introduzca una letra, comprobaremos si está en nuestra palabra. De ser así, la mostraremos `donde corresponde,` en caso contrario, mostraremos la letra en la pantalla bajo una lista de `letras erróneas` utilizadas y no permitiremos que nuestro usuario la introduzca de nuevo (puedes almacenarlas en un array de letras utilizadas para comprobar 😆).
    - Daremos un número de intentos máximos al usuario, por lo que si el usuario falla el máximo de veces permitidas le informaremos de que la partida se ha terminado y tendrá que comenzar una nueva partida usando el botón de inicio.
    - Si acierda todas las letras, ¡habrá ganado! Muestra de alguna forma las vidas que le quedan al usuario cuando intenta adivinar una palabra para que sepa como avanzar con el ejercicio 🔮
    
- **Sudoku**
    
    Tendrás que usar React Router para crear una página o ruta específica para este juego en `/sudoku`.
    
    Como imaginarás, crear y validar un sudoku es algo bastante complicado que lleva tiempo, pero vamos a echarte una mano en la parte que no está tan relacionada con `React` y te vamos a recomendar el uso de una librería que por nuestra experiencia, funciona bastante bien: [https://www.npmjs.com/package/sudoku](https://www.npmjs.com/package/sudoku) (siéntente libre de usar alguna otra alternativa si lo deseas).
    
    ```bash
    npm i sudoku
    ```
    
    Esta librería genera un array de un solo nivel con `81` celdas, es decir, `9x9` elementos que podremos renderizar sin problemas 🎉 Algunos números vienen ya en el array y tendremos que sustituir los valores `null` por nuevos números adecuados según el usuario lo complete en la interfaz.
    
    Para generar el tablero inicial que debemos renderizar, hay que usar un estado, no te preocupes por ello que ya te dejamos esta pista también, queremos que te centres en React principalmente:
    
    ```jsx
    const [sudokuBoard, setSudokuBoard] = useState(null);
    
    useEffect(() => {
      const newBoard = sudoku.makepuzzle();
      setSudokuBoard(newBoard);
    }, []);
    ```
    
    Ahora tendrás que maquetar por medio de CSS y JSX, el tablero (recomendamos que uses botones o inputs), para que un usuario pueda introducir un número del 1 al 9 en el sudoku. Te dejamos libertad para decidir como hacerlo, pero debes permitir que vaya rellenando las casillas vacías hasta completar el sudoku 🔢
    
    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96dab8f1-9834-4454-aae4-3bfa90d5594c/Captura_de_pantalla_2020-07-03_a_las_23.46.16.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/96dab8f1-9834-4454-aae4-3bfa90d5594c/Captura_de_pantalla_2020-07-03_a_las_23.46.16.png)
    
    La función que comprueba si el sudoku se ha completado es parte de la librería también:
    
    ```jsx
    // Comprobamos si solved es truthy, y sudokuBoard está correctamente solucionado
    const solved = sudoku.solvepuzzle(sudokuBoard);
    ```
    
    En el momento en que el usuario haya completado la última celda disponible, permitiremos que esté disponible un **botón para validar su sudoku** contra la solución.
    
    Si la solución no es correcta, le daremos a nuestros usuarios las siguientes posibilidades:
    
    ```jsx
    - Ver la solución y acabar la partida.
    - Seguir intentándolo y comprobar más tarde. 
    ```
    
    Por último, añade un botón para empezar una nueva partida siempre que queramos, pisando los datos anteriores de nuestro estado.
    

**Para terminar...**

Recuerda que tu mism@ de puedes poner tus propios límites, te pedimos que completes los tres juegos con su funcionalidad principal, sin necesidad de que hagas una maquetación increible pero si lo suficientemente buena como pare poder usar la aplicación de forma adecuada, es tu portfolio y por tanto deberías querer hacerlo lo más bonito posible 🎨. Céntrate en mantener una buena calidad de código y comprender bien todo lo que estás haciendo 🦄

Recuerda que el objetivo además es conseguir una `Home` para nuestro **Hub de Juegos** que tendrá cada uno de los juegos propuestos disponibles. De forma que el usuario navegará entre ellos.

**Tarea Bonus: Siguiente nivel** 

Si has terminado los juegos y buscas más retos para destacar tu proyecto y portfolio (te lo recomendamos), recuerda puedes usar  `Localstorage`  con la finalidad de simular información real para uso demostrativo para crear un pequeño sistema "simulado" de `autenticación y rutas protegidas`.

- También podrías crear `marcadores` de cada uno de los juegos e ir mostrando todos ellos gracias al contexto.

Puedes añadir tantas funcionalidades nuevas y alternativas como quieras, **siempre que hayas conseguido crear todos los juegos descritos previamente**. Todo esto te permitirá tener un portfolio de calidad y muy llamativo para tu futuro profesional.

### Criterio de aceptación

Tu proyecto debe estar desplegado en **Netlify** y superar los siguientes criterios de aceptación para que el equipo de Rock{theCode} te certifique como Frontend Developer.

- [ ]  Veré una Home en la que se muestran los tres juegos enumerados.
    - [ ]  La Home tendrá un Link apuntando a cada ruta juego para navegar en la aplicación.
- [ ]  En la ruta `/tictactoe` encontraré un Tres en Raya que será jugable.
    - [ ]  Podré empezar nueva partida pulsando un botón.
    - [ ]  El jugador que comienza se seleccionará de forma alreatoria (random).
    - [ ]  Cada jugador está representado por un símbolo propio (X o O sirven).
    - [ ]  Si un jugador gana el tres en raya, se lanzará un mensaje en pantalla validando su victoria.
    - [ ]  Si los jugadores empatan, se lanzará un mensaje en pantalla anunciando el empate.
    - [ ]  Cuando una partida acabe, el botón de empezar nueva partida volverá a estar disponible.
- [ ]  En la ruta `/hangman` encontraré el Juego del Ahorcado.
    - [ ]  Podré empezar una partida pulsando un botón.
        - [ ]  Esto mostrará en pantalla una palabra incompleta (todas las letras son guiones bajos) usando una palabra aleatoria como referencia.
    - [ ]  Tendré disponible un `input` o un botón que represente cada letra del abecedario, de forma que pueda introducir nuevas letras.
    - [ ]  Cada vez que me equivoque con una letra, esta aparecerá listada como error en pantalla.
    - [ ]  Si acierto con una letra, los espacios de la palabra incompleta se llenarán con esa letra donde corresponda.
    - [ ]  Tendré un límite máximo de intentos para probar, si me equivoco acabará la partida y se anunciará con un mensaje.
        - [ ]  Esto mostrará la palabra a adivinar completa, para enseñarme cual era.
        - [ ]  Las vistas deben ser visibles en cualquier momento y reducirse en 1 a cada fallo.
    - [ ]  Cuando acabo una partida, podré empezar una nueva con otra palabra aleatoria.
- [ ]  En al ruta `/sudoku` encontraré el juego Sudoku.
    - [ ]  El juego usará la librería `sudoku` que hemos recomendado, o una alternativa similar en caso de que lo prefieras.
    - [ ]  Pulsando un botón para empezar partida, se generará un nuevo tablero de Sudoku con números incompletos.
    - [ ]  Cada celda de número incompleto debe ser un elemento que puedo editar (un botón para pulsar y seleccionar después un número, un input para introducir un número…).
    - [ ]  Debo poder ver un botón para completar el sudoku si me rindo, que muestre el tablero completo con la solución final.
    - [ ]  Debo poder ver un botón (disabled y no clickable por defecto) que se activará cuando tenga todos los números del sudoku llenos. Este botón me permitirá comprobar mi solución.
        - [ ]  Mostrará un mensaje en pantalla si he acertado el sudoku, dejándome empezar una nueva partida tras mi victoria.
        - [ ]  Mostrará un mensaje en pantalla si no he acertado.
- [ ]  Bonus: La aplicación tendrá un input para hacer login con un falso usuario que nos proveerás en el README del proyecto.
    - [ ]  La Home que muestra los juegos y la ruta de cada uno de estos, estarán protegidos bajo autenticación.
    - [ ]  La validez de la autenticación se podrá almacenar en `LocalStorage` con un valor.