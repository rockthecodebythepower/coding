**Introducción**

---

Hola y bienvenidos al primer video de HTML, vamos ir viendo qué es HTML5 y desgranar todas las particularidades de este lenguaje de marcado. Intentaremos que estas lecciones sean los más prácticas posibles dado que abarcar toda la API de HTML5 será bastante complicado, por ello nos enfocaremos en un ámbito más práctico.

**Crear ficheros**

---

Lo primero que vamos a hacer es crearnos una carpeta con un fichero llamado index.html y abrirla en vscode.

Una vez tenemos nuestro documento creado vamos a generar la estructura de un documento HTML.

**Partes de un documento HTML**

---

Tipo de documento | **DOCTYPE** → Es la primera línea del documento y sirve para marcar el tipo de dicho documento.

Etiqueta **html** en la que podemos seleccionar el idioma a través del atributo lang, esta etiqueta engloba todo nuestro contenido.

Cabecera | **head** → Se usa para insertar diferentes metadatos, es decir información que no será renderizada por el navegador.

Cuerpo | **body** → Aquí es donde añadimos los elementos que queremos que sean renderizados o visualizados en el navegador y por lo tanto el usuario los verá.

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body></body>
</html>
```

**Composición de una etiqueta HTML**

---

Como hemos comentado las aplicaciones web son documentos de texto que contienen información, dicha información está estructurada a través de etiquetas. La estructura de una etiqueta HTML tiene el siguiente formato:

```html
<nombre-etiqueta nombre-atributo="valor-atributo">contenido</etiqueta>
```

Podemos decir que la parte fundamental de una etiqueta está compuesta por la apertura [**<apertura-etiqueta>**] y el cierre de la etiqueta [**</cierre-etiqueta>**].

Y os preguntaréis si podéis poner el nombre de la etiqueta que queráis y la respuesta es NO, ya que HTML nos da un listado de etiquetas con las que trabajar. Por ejemplo para representar un párrafo usamos la etiqueta **<p>**

```html
<p>Bienvenidos a WikiBoot</p>
```

**Atributos HTML**

---

Dentro de las etiquetas nos podemos encontrar atributos. Los atributos contienen cierta información sobre la etiqueta o su modo de actuar (contenido). Un ejemplo sería:

```html
<p id="name">Alberto Rivera</p>
```

En este punto vemos que **<p>** sería la etiqueta y hemos añadido un atributo **id** cuyo valor asignado es **“name”**, de este modo tenemos una etiqueta con un atributo de tipo identificador que hace referencia al contenido de dicha etiqueta.

Ahora os volveréis a preguntar si podemos usar un atributo a nuestra elección y la respuesta es si y no, es decir cada etiqueta tiene un conjunto de atributos que podemos usar pero existen algunos casos en los que podemos crearlos libremente.

**Comentario HTML**

---

Por último y para finalizar decir que en ocasiones queremos dejar un comentario dentro de nuestro fichero HTML y que no sea visible para el usuario en el navegador pues usando:

```html
<!-- Esto es un comentario y el navegador no lo muestra -->
```

El usuario no verá este mensaje solamente lo veremos nosotros y los compañeros que tengan acceso a nuestro fichero.
