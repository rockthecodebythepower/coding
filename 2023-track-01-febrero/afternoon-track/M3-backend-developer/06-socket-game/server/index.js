import http from 'http';
import express from 'express';
import { Server } from 'socket.io';

const app = express();

app.get('/ping', (_req, res) => {
  res.status(200).json({ data: 'Pong!' });
});

const server = http.createServer(app);

// Instanciamos los sockets pasando el server de Express que hemos creado como argumento
const io = new Server(server, {
  // Configuro CORS para que cualquier cliente pueda conectarse
  cors: {
    origin: true,
  },
});

// Creamos un objeto global de ROOMs para los users que se conecten a jugar
const rooms = {};

// Configuramos aquí todo el comportamiento de un cliente al servidor por sockets
io.on('connection', (client) => {
  console.log('>>> Cliente conectado');

  client.on('join_room', (data) => {
    console.log('>>> Uniéndose a la ROOM:', data);
    const { username, room } = data;

    // Si el jugador se conecta a una habitación cuyo nombre no se había creado antes, la creo manualmente
    if (!rooms[room]) {
      rooms[room] = {
        players: [],
      };
    }

    // Internamente, socket.io crea sus propias ROOM (donde no podemos guardar datos)
    client.join(room);

    // A partir de aquí ya existirá siempre la room a la que se ha conectado el user
    rooms[room].players.push(username);

    // Cuando un jugador se termine de unir a un ROOM, avisamos a los clientes conectados
    io.to(room).emit('joined', { username, room, players: rooms[room].players });
  });

  client.on('disconnect', () => {
    console.log('>>> Cliente desconectado');

    // Aquí tenemos que limpiar la room cuando alguien se desconecte
  });
});

const PORT = process.env.PORT || 4001;
server.listen(PORT, () => {
  console.log(`Server started at *:${PORT}`);
});
