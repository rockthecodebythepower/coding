// Aquí vamos a definir todas las rutas del server
// que estén detrás de /auth para autenticación de usuarios
import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validateEmail } from '../utils/validators.js';
import { User } from '../models/index.js';

// HASH => 'string_base' => SALT => '9132n8nr##$m9idn1' (password)
// ENCRYPT => 'string_base' **** 'secretoquenadiesabe' => '9i74801h0d8n0123d019h2308bd8' **** 'secretoquenadiesabe' => 'string_base' (JWT)

const router = express.Router();

// POST http://localhost:4001/auth/register
router.post('/register', async (req, res) => {
  try {
    // 💡 Si quiero sacar un valor complejo (como un objeto)
    // en un POST o PUT, lo saco del body que es donde
    // el developer me habrá mandado la información como JSON
    const { email, password, username } = req.body;

    // Aquí se validan que el campo email es correcto:
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      res.status(400).json({ data: 'Invalid email address format' });
      return;
    }

    // Estas otras validaciones se deberían hacer también de forma compleja, esto es a modo demostrativo:
    if (!password.trim() || !username.trim()) {
      res.status(400).json({ data: 'Invalid password or username' });
      return;
    }

    // Comprobamos que NO exista previamente un User con el mismo email
    // Si ya está registrado devolvemos un error 400
    const previousUser = await User.findOne({ email }, { _id: 1 }).lean();
    if (previousUser) {
      res.status(400).json({ data: 'Email already exists' });
      return;
    }

    // Como vamos a crear un User nuevo, hasheamos su contraseña antes de guardarla en la base de datos
    const passwordHash = await bcrypt.hash(password, Number(process.env.PASSWORD_SALTS));

    // En caso de que el User no exista, creamos uno nuevo
    const newUser = new User({
      email: email.toLowerCase(),
      password: passwordHash,
      username,
    });

    await newUser.save();
    res.status(201).json({ data: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ data: 'Internal server error' });
  }
});

// POST http://localhost:4001/auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Aquí deberíamos validar los campos del body o usar un esquema con Joi o Zod
    // Primero buscamos un User para saber que existe
    const user = await User.findOne({ email: email.toLowerCase() }).lean();
    if (!user) {
      res.status(401).json({ data: 'Wrong email or password' });
      return;
    }

    // Como ahora tenemos User, comprobamos que password es correcto
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      res.status(401).json({ data: 'Wrong email or password' });
      return;
    }

    // 👮‍♀️👮‍♂️🚔🚨 Aquí creamos el token con la información de User para considerar
    // que se ha logeado en la aplicación
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: 3 * 60 * 60 * 1000,
    });

    // Activar el debugger: Ctrl + Shift + P => Toggle Auto Attach => Smart
    res.status(200).json({
      data: {
        token,
        user: {
          username: user.username,
          email: user.email,
        },
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ data: 'Internal server error' });
  }
});

export default router;
