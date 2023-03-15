//Importamos nuestros enum. Se le suele poner _ para diferenciar el nombre de fichero al importado
const enum_ = require('./enum');

//Exportar una función que genera una respuesta recibiendo una serie de argumentos. Esta respuesta será un objeto que se va a conformar con los datos que genere cada una de las peticiones
exports.ResponseService = async (status, errorCode, message, data) => {
  return await {
    status: status,
    info: {
      errorCode: errorCode,
      message: message,
      data: data,
    },
  };
};

//Exportar una serie de funciones que reciban un mensaje por argumento, y que van a ser nuestros "custom console.log";

exports.LogSuccess = (msg) => {
  console.log(enum_.GREEN_LOG, msg);
};
exports.LogInfo = (msg) => {
  console.log(enum_.CYAN_LOG, msg);
};
exports.LogWarning = (msg) => {
  console.log(enum_.YELLOW_LOG, msg);
};
exports.LogDanger = (msg) => {
  console.log(enum_.RED_LOG, msg);
};
