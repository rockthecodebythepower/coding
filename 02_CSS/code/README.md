**Introducción**

---

Durante las lecciones anteriores hemos tratado algunos conocimientos básicos sobre la sintaxis de HTML, que nos han permitido desarrollar nuestras primeras páginas. Ahora vamos a realizar una introducción a la tecnología que nos permite aplicar estilos a estas páginas: CSS.

El nombre CSS proviene del inglés Cascading Style Sheets (hojas de estilo en cascada). El propio nombre nos indica que serán documentos y que su aplicación es en cascada (esto lo trataremos más adelante).

Mediante CSS tendremos la posibilidad de aplicar reglas de visualización como: colores, márgenes, bordes, sombras, tamaños y muchas más propiedades.

**Incluir CSS**

---

Existen diferentes formas de incluir estilos en nuestro HTML pero nosotros recomendamos incluirlo en un fichero externo, que es como trabajaremos en adelante.

Para incluir ficheros CSS externos debemos incluir la etiqueta **<link> ``**dentro de nuestra etiqueta **<head>** de la siguiente manera.

```html
<link rel="stylesheet" href="./name-file.css" />
```

Como podemos observar la etiqueta **<link>** posee varios atributos. Los dos primeros (**"rel"** y **"type"**) indican al navegador que es una hoja de estilos de tipo texto. El último atributo: **"href"** ya debería sonarnos, puesto que en las etiquetas **<a>** (enlaces) usamos el mismo atributo para indicar la ruta a la que queremos dirigir dicho enlace.

En este caso **"href"** nos servirá para indicar la ruta en la que se encuentra alojado el fichero CSS que queremos incluir.

**Sintaxis básica**

---

```css
selector {
  propiedad: valor;
}
```

**Selector**: El selector es el **elemento HTML** que vamos a seleccionar del documento para aplicarle un estilo concreto. Por ejemplo, con **p** seleccionaríamos todas las etiquetas **<p>** del HTML. Más adelante veremos que esto puede ser mucho más complejo, y dedicaremos una serie de capítulos exclusivamente a este tema.

**Propiedad**: La propiedad es una de las diferentes características que brinda el lenguaje CSS y que aplicaremos al selector para darle estilo.

**Valor**: Cada **propiedad CSS** tiene una serie de valores concretos a que se le pueden asignar, con los que tendrá uno u otro comportamiento.

Con todo esto le iremos indicamos al navegador que, para cada etiqueta (_selector especificado_) debe aplicar las reglas (_propiedad y valor_) indicadas.

**Primera prueba**

---

En el fichero que hemos creado podemos empezar a estilar para comprobar que la visualización de nuestro contenido HTML es correcta.

```html
<p>Prueba Uno</p>
<p>Prueba Dos</p>
```

Y vamos a estilarlo atacando al nombre de nuestra etiqueta.

```css
p {
  color: red;
  text-decoration: underline;
}
```

**Herencia**

---

En primer lugar, debemos saber que algunas propiedades CSS se **heredan** desde los elementos padres a los elementos hijos, modificando el valor que tienen por defecto.

```css
body {
  color: green; /* Color de texto */
}
```

En el ejemplo anterior, aplicamos a la etiqueta HTML **<body>** el **color de texto verde**. En principio, esta propiedad aplicará dicho color a los textos que estén dentro de dicha etiqueta **<body>**.

Sin embargo, si tenemos más etiquetas dentro, como por ejemplo una etiqueta **<div>** con texto en su interior, si no tenemos aplicada una propiedad **color** a dicho elemento, veremos que también aparece en color verde. Esto ocurre porque la propiedad **color** es una de las propiedades CSS que, en el caso de no tener valor específico, **hereda el valor de su elemento padre**.

Ojo, porque esto no ocurre si lo hacemos con otras propiedades CSS, como por ejemplo, con **los bordes** de un elemento HTML.

```css
body {
  border-width: 2px;
  border-style: solid;
  border-color: red;
}
```

Si esta propiedad aplicara herencia, todos los elementos HTML situados en el interior de **<body>** tendrían un borde rojo, comportamiento que no suele ser el deseado. Por esa razón, la herencia no ocurre con todas las propiedades CSS, sino sólo con algunas propiedades como **color** o **font**, donde si suele ser deseable.

Para forzar la herencia podemos jugar con los siguientes valores especiales.

**inherit** : Hereda el valor que tiene la misma propiedad CSS en su elemento padre.

**initial :** Establece el **valor inicial** que tenía la propiedad CSS inicialmente.

**unset** : Combinación de las dos anteriores: Hereda el valor del padre, y en caso de no existir, su valor inicial.

Veamos, por ejemplo, el siguiente ejemplo para forzar la herencia en una propiedad que no la aplica por defecto.

```css
body {
  border-width: 2px;
  border-style: solid;
  border-color: red;
}

div {
  border: inherit;
}
```

Si tenemos un elemento **<div>** dentro del **<body>**, el primero heredará los estilos del elemento **<body>**, ya que le hemos especificado el valor **inherit** en la propiedad **border**.

**Cascada**

---

Uno de los conceptos principales más importantes de **CSS** es el concepto denominado **cascada**. De hecho, la **cascada** es la que le da sentido a la **C** inicial en el nombre de **CSS**.

Supongamos que nos encontramos ante el siguiente escenario, donde aplicamos unos estilos CSS a **exactamente el mismo selector** (**div**) y donde coincide la propiedad CSS **color** con diferente valor en cada bloque.

```html
<div>Texto del elemento</div>

<style>
  div {
    color: red;
    padding: 8px;
  }

  div {
    color: blue;
    background-color: grey;
  }
</style>
```

En este caso, ¿cuál de las dos reglas prevalece, si tenemos en cuenta que se refieren al mismo elemento y están al mismo nivel? La respuesta es muy fácil: Prevalece siempre la última regla definida, la cuál **mezcla** y **sobreescribe** las propiedades anteriores.

En el caso anterior, el resultado final (_valor computado_) sería el siguiente.

```css
div {
  color: blue; /* Se sobreescribe la última */
  padding: 8px;
  background-color: grey;
}
```
