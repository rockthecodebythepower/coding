# Selector de clase

**Introducción**
---

Edita un fichero index.html para aplicarle la clase **.small** a los dos párrafos usando el atributo correspondiente

**Autoevaluación**
---

- Las dos etiquetas p tienen que tener un tamaño de fuente de 9px.
- Solo tienes que editar el fichero HTML, ya que el CSS ya está generado y enlazado.

**Html code**
---

```html
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="./styles.css" />
		<title>Selector de clase</title>
	</head>

	<body>
		<p class="small">Hello!</p>
		<p class="small">Rocker!</p>
	</body>
</html>
```

**Css code**
---

```css
.small{
    font-size: 9px;
}
```