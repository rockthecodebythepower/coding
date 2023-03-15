//Nos importamos tanto magic, como los enum para saber los codigos de estado, como los ORM
const magic = require('../../utils/magic');
const enum_ = require('../../utils/enum');
const odmMovie = require('../odm/odm-movie');

//Vamos a exportar una serie de funciones que generan indicaciones con las que generar las respuestas, tanto si podemos realizar la petición como si no.

//Gracias a estas funciones que vamos a crear vamos a lanzar la logica de los ODM y gracias a ResponseService vamos a servirle la respuesta de las mismas al usuario

exports.GetAll = async (req, res) => {
  //Inicializamos unas variables con datos por defecto
  let status = 'Success',
    errorcode = '',
    message = '',
    data = '',
    statuscode = 0,
    response = {};

  //Trycatch
  try {
    //Iniciamos la respuesta básica
    let respOdm = await odmMovie.GetAll();
    //Comprobamos los errores y modificamos las variables iniciales
    if (respOdm.err) {
      status = 'Failure';
      errorcode = respOdm.err.code;
      message = respOdm.err.message;
      statuscode = enum_.CODE_BAD_REQUEST;
      data = '';
    } else {
      //Cuando no hay error vamos a modificar las variables iniciales con los datos correctos
      message = 'Success Response';
      data = respOdm;
      statuscode = data.length > 0 ? enum_.CODE_OK : enum_.CODE_NO_CONTENT;
    }
    //Cuando hayamos modificado para bien o para mal las variables iniciadas, generaremos la respuesta definitiva con ResponseService
    response = await magic.ResponseService(status, errorcode, message, data);
    //La retornamos
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log('err =', err);
    response = await magic.ResponseService(status, errorcode, message, data);
  }
};

exports.Create = async (req, res) => {
  console.log(req.body)
  //Inicializamos unas variables con datos por defecto
  let status = 'Success',
    errorcode = '',
    message = '',
    data = '',
    statuscode = 0,
    response = {};

  //Trycatch
  try {
    //Almacenamos los datos del cuerpo de la petición
    const title = req.body.title;
    const poster = req.body.poster;
    //Comprobamos los campos que queremos que sean obligatorios (o cualquier otro tipo de comprobación)
    if (title && poster) {
      let respOdm = await odmMovie.Create(title, poster);
      //Si hay error
      if (respOdm.err) {
        status = 'Failure';
        errorcode = respOdm.err.code;
        message = respOdm.err.message;
        statuscode = enum_.CODE_BAD_REQUEST;
        data = '';
      } else {
        //Si esta todo correcto generamos la respuesta
        message = 'Movie created';
        statuscode = enum_.CODE_CREATED;
      }
    } else {
      //Si no hay title y poster...
      status = 'Failure';
      errorcode = enum_.CODE_BAD_REQUEST;
      message = 'All fields are required';
      statuscode = enum_.CODE_BAD_REQUEST;
    }
    //Cuando hemos terminado de comprobar como va a ser la respuesta la creamos y la devolvemos
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log('err = ', error);
    return res.status(statuscode).send(response);
  }
};
