# 02 - Manejo de props

## Preparación del ejercicio

¡Igual que en el ejercicio `01-jsx-interpolacion.md`! Prepara tu proyecto de Vite con React y sigue el enunciado 🦄

## Enunciado

Como hemos visto en el contenido del máster, los componentes de React deben utilizar propiedades especiales para comunicarse entre ellos. Estas propiedades las pasamos de un componente `parent` a un componente `children` como si fueran atributos de HTML, y las llamamos `props`.

En este ejercicio, tendrás que crear una carpeta `src/components` en tu proyecto, en la que crearás componentes de React que devolverán su propio contenido JSX e interpolarán valores provenientes de `props`.

1. En tu carpeta `components`, crea un archivo de componente con el nombre `Title.jsx`, y en el archivo añade una función de componente (tal y como hemos visto en videos y puedes también comprobar en el componente `App`) que se llame `Title`. No olvides exportar el componente con `export default`.
2. Ahora haz que el componente `Title` devuelva un contenido JSX que sea un `h1` que contenga el texto `Este es el título de mi app`.
3. Importa el componente `Title` en tu archivo `App.jsx` (recuerda que `App` es el componente base de tu aplicación) y renderízalo dentro del JSX de `App`. Es decir, usa `Title` como si fuese un elemento HTML y comprueba que en tu proyecto corriendo en tu navegador puedes ver el título aparecer en pantalla.

¡Ahora tienes un componente importado y renderizado dentro de otro componente! Es el momento de que hablen entre ellos:

1. En tu componente `App`, dentro de la **function** y antes del **return**, crea una constante llamada `pageTitle` de tipo string con el título `¡Bienvenid@s a Rock{theCode}!`.
2. Ahora pasa la constante `pageTitle` a tu componente `Title` como un `prop`. Es decir, como una propiedad HTML propia de tu componente. Ponle el nombre que quieras al prop aunque llamarlo `text` sería algo totalmente válido.
3. Ve a tu componente `Title` y haz que reciba los `props` como un argumento. Cambia ahora el contenido del `h1` que creaste en este componente por la interpolación del prop correspondiente. Si llamaste `text` a tu prop, tendrás que interpolar `{props.text}` en tu componente.

## Bonus

Crea un componente `Paragraph` que reciba un prop `text` y devuelva un elemento `p` con el valor del prop interpolado. Úsalo justo debajo de `Title` para ver un título y un texto usando componentes adicionales 💫
