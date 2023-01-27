# Proyecto 5: App del tiempo

## Enunciado de proyecto

Este proyecto de React te permitirá poner a prueba lo que sabes de React Router y tendrás que investigar (con un poco de nuestra ayuda) como utilizar la localización de un usuario para conectar con la API del tiempo de su zona para cargar las previsiones..

En este proyecto utilizarás la API de Open Weather en [https://openweathermap.org/api](https://openweathermap.org/api). Regístrate y obtén una API key gratuita, es bastante sencillo y nos habilita a usar hasta 1000 llamadas diarias a su API (cuidado con los cambios de estado y los rerenders!).

![Capture(1).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/309a8edf-edf3-4b70-8b39-bf49d7ed3a3a/Capture(1).png)

Tu objetivo será crear una aplicación que, cuando cargue en el cliente, obtenga la geolocación del usuario guardado su `latitud` y `longitud` en un **State**. Cuando ambas tengan valor y el estado cambie, se lanzará un Effect que pedirá a la API de Open Weather el tiempo actual tal con el endpoint que se indica en la siguiente documentación: [https://openweathermap.org/current](https://openweathermap.org/current)

```
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

> En la documentación de la API tienes datos sobre lo que devuelve, presétalos de una forma bonita y vistosa en una página que, a ser posible, no utilice scroll y todo esté en el viewport presentado.
> 

Presenta el tiempo con una imagen adecuada si está soleado, nublado, llueve… Esto puedes hacerlo con un icono que obtengas de alguna fuente de internet, o usando el icono que nos proporciona Open Weather. En la respuesta anterior, tendrás un campo `icon` para los principales datos del tiempo, úsalo para ver un icono con esta URL:

```jsx
const iconUrl = `http://openweathermap.org/img/w/${iconcode}.png`
```

- Aquí tienes una referencia de los iconos disponibles [https://openweathermap.org/weather-conditions](https://openweathermap.org/weather-conditions)

Aparte de esta información, tendrás que añadir una ruta aparte en React Router que nos permitirá buscar el tiempo por un set de ciudades que definirás previamente. Por ejemplo, define un array de objetos con nombre de ciudad, latitud, longitud.. y crea un select que presente todas las opciones para al menos cinco ciudades.

> Una ves hagas eso, usa el dato de dicha ciudad para presentar el tiempo en ese momento.
> 

¿Pensabas que eso era todo? Ahora extenderás el contenido de tu aplicación para añadir dos rutas más. Tendrán un comportamiento casi similar al que ya has hecho (una para tu localización actual y otra para buscar ciudades), pero esta vez utilizarás otro endpoint de la API que permite traer el tiempo a 5 días vista: [https://openweathermap.org/forecast5](https://openweathermap.org/forecast5)

```
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
```

En esta respuesta tendrás el tiempo a cinco días vista en intervalos de tres horas, te dejamos via libre para que investigues y descubras como trabajar con la respuesta💡¡Pero debes presentar las previsiones para los cinco días en las dos nuevas vistas!

<aside>
💡 Te recomendamos que cuando hagas una petición, copies la respuesta que te da en un objeto en tus componentes de React y uses dicho objeto en lugar de hacer más peticiones a la API mientras desarrollas. Esta técnica se llama mockear datos y es útil para ahorrar tiempo y recursos.

</aside>

Como pista, para obtener la geoposición de un usuario puedes invocar esta función (pruébala primero en la consola del navegador y activa los permisos de geolocalicación), tienes documentación aquí [https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API):

```jsx
navigator.geolocation.getCurrentPosition((position) => {
    console.log('Posición actual');
    console.log(position); // Muestra datos sobre la geoposición del usuario
})
```

### Criterio de aceptación

Tu proyecto debe estar desplegado en Netlify y superar los siguientes criterios de aceptación para que el equipo de Rock{theCode} te certifique como Frontend Developer. También debes compartir el link a tu repositorio de Github y tener un README que explique las URLs disponibles para su revisión.

- [ ]  Cuando habra la aplicación, veré el tiempo actual en el lugar en el que me encuentro. Esto cargará la información de Open Weather API.
- [ ]  Tendré un link en algún punto de la vista que me permita acceder a una nueva ruta. En esta ruta podré ver el tiempo actual en al menos cinco ciudades distintas a mi elección.
- [ ]  Tendré un link que me permita visitar una ruta que muestre la previsión del tiempo a cinco días vista en mi posición actual.
- [ ]  De la misma forma, habrá una última ruta que me permita ver la previsión del tiempo a cinco días vista en una de las ciudades que seleccione.
- [ ]  La información del tiempo se presentará en grados Celsius.
- [ ]  Veré un icono del tiempo para cada estado que haya (soleado, lluvioso…).
- [ ]  Veré un indicador de carga (loader) mientras la respuesta de la API está cargando.
- [ ]  Si no doy los permisos de geolocación en mi navegador, veré un mensaje en pantalla indicádome que debo activarlos para poder utilizar la aplicación.