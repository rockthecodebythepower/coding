import http from 'http';
import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
    },
  })
);

app.get('/ping', (_req, res) => {
  res.status(200).json({ data: 'Pong!' });
});

const server = http.createServer(app);

// Instanciamos los sockets pasando el server de Express que hemos creado como argumento
const io = new Server(server, {
  // Configuro CORS para que cualquier cliente pueda conectarse
  cors: {
    origin: (origin, callback) => {
      callback(null, true);
    },
    methods: ['GET', 'POST'],
  },
});

// Creamos un objeto global de ROOMs para los users que se conecten a jugar
const rooms = {};

// Configuramos aquí todo el comportamiento de un cliente al servidor por sockets
io.on('connection', (client) => {
  console.log('>>> Cliente conectado');
  let connectionUsername = '';
  let connectionRoom = '';

  client.on('join_room', (data) => {
    console.log('>>> Uniéndose a la ROOM:', data);
    const { username, room } = data;

    // Si el jugador se conecta a una habitación cuyo nombre no se había creado antes, la creo manualmente
    if (!rooms[room]) {
      rooms[room] = {
        players: [],
        choices: {},
      };
    }

    // Limitar a 2 el número máximo de clientes por cada ROOM
    if (rooms[room].players.length >= 2) {
      client.emit('join_error');
      return;
    }

    // 🚀🚀🚀 Nice to have: Hacer que ninguno de los dos players pueda tener el mismo nombre

    // Internamente, socket.io crea sus propias ROOM (donde no podemos guardar datos)
    client.join(room);

    // A partir de aquí ya existirá siempre la room a la que se ha conectado el user
    rooms[room].players.push(username);

    // Añadimos valores a las variables de la conexión del usuario
    connectionUsername = username;
    connectionRoom = room;

    // Cuando un jugador se termine de unir a un ROOM, avisamos a los clientes conectados
    io.to(room).emit('joined', { username, room, players: rooms[room].players });
  });

  client.on('player_action', (data) => {
    const { username, room, choice } = data;
    rooms[room].choices[username] = choice;

    // Con esto comprobamos que hay dos elecciones hechas y podemos comprobar si
    // algún player ha ganado la partida 🚀
    const playersWithChoice = Object.entries(rooms[room].choices);
    if (playersWithChoice.length === 2) {
      // Sacamos el nombre y elección de cada jugador
      const player0 = playersWithChoice[0][0];
      const player0Choice = playersWithChoice[0][1];

      const player1 = playersWithChoice[1][0];
      const player1Choice = playersWithChoice[1][1];

      console.log('>>> Comprobando ganador:', {
        player0,
        player0Choice,
        player1,
        player1Choice,
      });

      // Comprobamos que han empatado
      if (player0Choice === player1Choice) {
        io.to(room).emit('result', {
          winner: null,
        });
      }
      // Comprobamos que gana el player 0
      else if (
        (player0Choice === 'rock' && player1Choice === 'scissors') ||
        (player0Choice === 'paper' && player1Choice === 'rock') ||
        (player0Choice === 'scissors' && player1Choice === 'paper')
      ) {
        io.to(room).emit('result', {
          winner: player0,
        });
      }
      // En caso contrario, gana el player 1
      else {
        io.to(room).emit('result', {
          winner: player1,
        });
      }

      // Limpiamos los choices después de haber comprobado ganador en la partida
      rooms[room].choices = {};
    }
  });

  client.on('disconnect', (data) => {
    console.log('>>> Cliente desconectado', data);

    // Avisar a los jugadores de cada ROOM cuando alguien se vaya
    // Saco de la ROOM al PLAYER que tenga el nombre USERNAME que me ha enviado
    if (rooms[connectionRoom]?.players?.length) {
      rooms[connectionRoom].players = rooms[connectionRoom].players.filter((player) => {
        return player !== connectionUsername;
      });

      // Mando la lista de players actualizada al FE
      io.to(connectionRoom).emit('left', { players: rooms[connectionRoom].players });
    }
  });
});

const PORT = process.env.PORT || 4001;
server.listen(PORT, () => {
  console.log(`Server started at *:${PORT}`);
});
