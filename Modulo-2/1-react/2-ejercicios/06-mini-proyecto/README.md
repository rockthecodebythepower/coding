**Ejercicio Mini-proyecto [2]**
---

Ha llegado el momento de ponerse a trabajar con ReactJS, para ello os proponemos una pequeña práctica que os ayude afianzar el concepto de children.

1. Crea una aplicación de ReactJS con vite → name: project-components-advanced.
2. Crea tu carpeta de `components` dentro de `src`.
3. Realizamos algunos componentes de ReactJS:
    1. Componente Header ⇒ Crea un componente que reciba como children el componente Title y retorne un `<header> + Children`.
    2. Componente Main ⇒ Crea un componente que reciba como children los algunos componentes creados y retorne un `<main> + Children`.
    3. Componente Footer ⇒ Crea un componente que reciba como children los algunos componentes creados y retorne un `<footer> + Children`.
    4. Componente CharacterList ⇒ Crea componente listado que genera un `<ul>` 
    5. Componente ItemList ⇒ Crea un componente que recibe un item y retorna un `<li>` por cada uno de los elementos recibidos.
    6. Componente Title ⇒ Crea un componente Title que retorne un `<h1>` con un texto recibido por props.
    7. Componente SubTitle ⇒ Crea un componente que retorne un `<h2>` con un texto recibido por props.
    8. Componente Image ⇒ Crea un componente que retorne un `<image>` con un src y alt recibido por props || además también recibirá el with y el height.
    9. Componente Paragraph ⇒Crea un componente que retorne un `<p>` con un texto recibido por props.
4. Estila cada uno de ellos haciendo uso de CSS Modules → hoja de estilo asociada al componente.
5. Exporta los componentes en un `index.js` e importalos en `App.jsx`.
    1. Composición HTML:
        
        ```html
        <header>
        	<h1>Title</h1>
        </header>
        <main>
        	<h2>SubTitle</h2>
        	<ul>
        		<li>
        				<p>Name</p>
        				<image>
        				<p>Status</p>
        				<p>Origin</p>
        		</li>
        	</ul>
        </main>
        <footer>
        	<p>Created by name</p>
        	<image>
        	<p>Copyright</p>
        </footer>
        ```
        
6. Puedes usar los componentes tantas veces como quieras pero siempre bajo la estructura de los componentes `<Header>` || `<Main>` || `<Footer>`.
7. Comprueba que la visualización es correcta.