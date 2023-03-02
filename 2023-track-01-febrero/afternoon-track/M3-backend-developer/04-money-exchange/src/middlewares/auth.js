import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  try {
    // Me llegará el string 'Bearer ${token}' en Authorization
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];

    // Compruebo que el token es válido: no ha caducado ni se ha modificado
    // Sacamos la id y el email que usamos como payload al firmar el token
    const { id, email } = jwt.verify(token, process.env.JWT_SECRET);
    // Mutamos req para añadirle las propiedades del User por si en el endpoint
    // de después de este middleware hace falta algo de la información
    req.user = { id, email };

    // Si he llegado hasta este punto, es que el token funciona y es válido
    next();
  } catch (err) {
    // Si el token no es válido lanzamos una respuesta y cortamos la ejecución del endpoint
    res.status(401).json({ data: 'Unauthorized' });
  }
};
