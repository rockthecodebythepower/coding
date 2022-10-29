## Encuentra el tesoro

Vamos a hacer una especie de hundir la flota simplificado al máximo.

En base al siguiente html construye en el `<tbody>` filas y columnas en base a lo que introduzca el usuario mediante una ventana modal. Esto lo puedes hacer usando el metodo de javascript `prompt()`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="exercise-4.js" defer></script>
  </head>
  <body>
    <h1>Attemps: <span data-function="attempts">0</span></h1>
    <table>
      <tbody data-function="board"></tbody>
    </table>
  </body>
</html>
```

Usa ese metodo dos veces para obtener las columnas y las filas que tendrás que hacer para tu juego.

Almacena dos numeros aleatorios en base al maximo de columnas y de filas. Esa coordenada será donde estará el tesoro.
El resto serán fallos si el usuario hace click.

Construye tantas filas y columnas dinamicamente como el usuario haya especificado e una imagen con la siguiente url por defecto:

```js
const imgXUrl = "./public/exercise-4/x.png";
```

Cuando construyas el tablero el usuario podrá hacer click a las celdas de la tabla y deberás comprobar si el click concuerda con la coordenada previeamente almacenada. Si es así cambia el atributo `.src` de la imagen por la siguiente imagen y el juego habrá acabado:

```js
const imgChestUrl = "./public/exercise-4/chest.png";
```

En caso contrario la imagen será de una calavera:

```js
const imgSkullUrl = "./public/exercise-4/skull.png";
```

Como extrá sería genial hacer un contador con el span que te dejamos en el html que sume 1 por cada intento que el usuario haya realizado antes de encontrar el tesoro.

Y ya si haces un botón de reset para el juego...sería fabuloso :)
