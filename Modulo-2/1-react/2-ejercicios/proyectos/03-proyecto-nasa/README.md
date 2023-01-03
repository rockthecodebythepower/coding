**Introducción**
---

En este proyecto vamos a crear una aplicación web con `Vite` y `React` consumiendo una de las API’s oficiales de la `NASA` con la que podremos consultar la fotografía astronómica del día.

Lo primero que tendremos que hacer antes de empezar es generar la `API Key` en el formulario de bienvenida, ya que gracias a esta podremos realizar las peticiones: 

[NASA Open APIs](https://api.nasa.gov/)

<div align="center"><img src="../../../../README/nasa-1.png"/></div>

Una vez tengamos a buen recaudo nuestra API Key podremos navegar hasta la sección de `APOD (Astronomic Picture of the Day)`, inspeccionando tanto para lo que sirve como los endpoints y las queries que nos permite realizar:

<div align="center"><img src="../../../../README/nasa-2.png"/></div>

<div align="center"><img src="../../../../README/nasa-3.png"/></div>

Como podemos observar, a la hora de realizar la petición tendremos que meterle dentro de la `query` nuestra `api_key` y podremos hacer uso de un parámetro llamado `date`. Esto nos será de mucha utilidad más adelante para poder recuperar fotografías de días anteriores que el actual, ya que el endpoint en sí nos devuelve la foto del día en el que se realice la petición.

Una vez tenemos preparada la información que vamos a consumir crearemos un nuevo proyecto con Vite utilizando React como entorno de desarrollo.

En este caso, y para simplificar toda la funcionalidad sujeta a refactorización, vamos a crear solo un componente llamado `Figure.jsx`, por lo que tendríamos el componente base `App` y este. En el componente `Figure` renderizaremos la “ficha” que nos devuelve la API.

Además de lo mencionado tendremos que instalar `axios` para manejar la asincronía de las peticiones con esta librería, aunque la podéis realizar de las formas tradicionales que nos permite JavaScript.

[Empezando](https://axios-http.com/es/docs/intro)

**Code**

---

La funcionalidad base de nuestra aplicación irá definida en `App.jsx` de la siguiente forma:

```jsx
//Recuperamos la fecha actual en un formato ISO -> 2022-01-01
const today = new Date(Date.now()).toISOString().slice(0, 10);
//Creamos una variable de estado llamada apod inicializada como objeto vacío
const [apod, setApod] = useState({});
//Creamos una variable de estado llamada date con la fecha del día actual formateada
const [date, setDate] = useState(today);
//Almacenamos en una constante la URL de la NASA
const NASA_URL = "https://api.nasa.gov/";
//Almacenamos en una constante nuestra API Key, esto es recomendable almacenarlo en una variable de entorno
const NASA_API_KEY = "*************************";

//El efecto del renderizado será hacer una petición de tipo get a la URL de la NASA
//utilizando la query de la fecha con el valor de date y añadiéndole al final 
//la API Key tal como indica en la documentación.

//Una vez realizada la petición se setea el data en apod y le indicamos en el 
//array de dependencias que no vuelva a lanzar el efecto hasta que cambie el estado
//de date
  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

//Crearemos una función que setee la fecha a través de un input en el formato 
//necesario (igual que el formato de today)
  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };
```

Ya tendriamos toda la funcionalidad definida antes del return, por lo que vamos a definir de qué manera va a pintar cada uno de los datos y qué etiquetas van a hacer uso de las funciones definidas:

```jsx
return (
    <div className="App">
      <h2 className="title">
        NASA API <img src={logo} className="logo" alt="NASA LOGO" />
      </h2>
      <h1>Astronomy Picture of the Day</h1>
      <input type="date" id="photo-date" onChange={handleInput} />
      {date > today ? (
        <h2>Please choose a previous date</h2>
      ) : (
        <Figure data={apod} />
      )}
      <div className="standard-dialog center">
        <h1 className="dialog-text">@lethamburn - 2022 - <a href="https://api.nasa.gov/">https://api.nasa.gov/</a></h1>
      </div>
    </div>
  );
```

En el retorno estamos pintando un logo de la NASA e indicándole al input de tipo date que ejecute la función `handleInput` al cambiar a través del evento `onChange`.

Además estamos pintando a través de un ternario si la fecha almacenada es mayor que la actual un mensaje de `Please choose a previous date`, y cuando es igual o menos nos pintará los datos a través del componente `Figure` pasándoselos por props.

Nuestro componente `Figure` simplemente se encargará de pintar los datos retornados por la API, por lo que no nos será complicado customizar este retorno de la mejor manera posible:

```jsx
const Figure = ({ data }) => {
  return (
    <figure>
      <img src={data.url} alt={data.title} />
      <div className="window">
        <div className="title-bar">
          <button aria-label="Close" className="close"></button>
          <h1 className="title">{data.title}</h1>
          <button aria-label="Resize" className="resize"></button>
        </div>
        <div className="details-bar">
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        <div className="window-pane">{data.explanation}</div>
      </div>
    </figure>
  );
};
```

Como extra, en este caso estamos utilizando una librería de estilos basada en Apple vintage llamada `system.css`, la cual podremos instalar vía CDN en nuestro proyecto y hacer uso de las clases que nos indica la documentación. `Es más interesante que le dieseis vuestro propio estilo`.

[system.css](https://sakofchit.github.io/system.css/)

Y de esta manera rápida y sencilla tendremos una aplicación web donde consultar la fotografía astronómica del día, o del día que escojamos:

<div align="center"><img src="../../../../README/nasa-4.png"/></div>