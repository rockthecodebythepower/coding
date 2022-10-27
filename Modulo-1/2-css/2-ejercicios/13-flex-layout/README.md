# Flex Layout

En este ejercicio vamos a crear uno de los layouts mas comunes en las aplicaciones de hoy en día, conocido como **Holy Grail (Santo Grial)**, el cual vamos a implementar gracias a flex.

Tendremos que hacer uso de **flex-direction** para empujar el footer abajo, añadir algunos divs contenedores para poder colocar los elementos correctamente, hacer **flex-wrap** en las cartas para que caigan y calcular el espacio que estas ocupan para que resulte como se indica a continuación:

**Resultado**
---

<div align="center"><img src="../../../../README/flex-layout.png"/></div>

**Autoevaluación**
---

- El texto del header tiene un tamaño de 32px y un weight de 900.
- El texto del header está centrado verticalmente y a 16px del borde de la pantalla.
- El footer está en la parte inferior de la pantalla tocando el borde.
- El texto del footer esta centrado vertical y horizontalmente.
- El sidebar y el contenedor de cartas tienen que ocupar todo el espacio posible disponible por encima del footer.
- El sidebar tiene un ancho de 300px.
- Los links del sidebar tienen un tamaño de 24px, blancos y no tienen los estilos de subrayado que vienen por defecto.
- El sidebar tiene un padding de 16px.
- La sección de las cartas tiene un padding alrededor de 32px.
- Las cartas están repartidas horizontalmente pero cuando ya no caben más se wrapean a la siguiente línea. Hay que calcular cuando espacio deberían ocupar para que quede como en el resultado.