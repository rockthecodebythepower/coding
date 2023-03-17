import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

// Nos conectamos por Sockets al servidor que hayamos creado
const socket = io('http://localhost:4001');
// const socket = io('https://e582-5-224-255-55.eu.ngrok.io/ping');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [joined, setJoined] = useState(false);
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const usernameRef = useRef();
  const roomRef = useRef();

  // Este useEffect me sirve para suscribirme a eventos del socket cuando cargue la app
  useEffect(() => {
    socket.on('joined', (data) => {
      console.log('Se han unido a la room:', data);
      setJoined(true);
      setPlayers(data.players);
    });

    // Escuchamos cuando un player se vaya
    socket.on('left', (data) => {
      setPlayers(data.players);
    });

    // Si el servidor nos avisa de que la room está llena, mostramos un error
    // Y vaciamos el input de la habitación
    socket.on('join_error', () => {
      setError(true);
      setRoom('');
    });

    // Escuchamos cuando haya un resultado
    socket.on('result', (data) => {
      const { winner } = data;

      console.log('Resultado:', { winner });

      if (!winner) {
        alert('Habéis empatado!');
      } else if (winner === usernameRef.current) {
        alert('Has ganado 🎉!');
      } else {
        alert('Has perdido ❌!');
      }

      setLoading(false);
    });

    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      socket.emit('leave_room', { username: 'TEST', room: 'TEST' });
    });
  }, []);

  const handleJoinRoom = (ev) => {
    // Prevenimos que al entregar el form recarguemos la web
    ev.preventDefault();

    // No permitimos que se una nadie sin nombre ni habitación
    if (!username.trim() || !room.trim()) return;

    socket.emit('join_room', {
      username,
      room,
    });

    // De esta forma podemos usar el username y room del player
    // en cualquier momento y estarán sincronizados
    usernameRef.current = username;
    roomRef.current = room;
  };

  const handleChoice = (choice) => {
    socket.emit('player_action', {
      username,
      room,
      choice,
    });

    setLoading(true);
  };

  return (
    <div className="App">
      <h1>Piedra, papel y tijeras - Socket.io</h1>

      {joined ? (
        <>
          <h2>Te has unido a la habitación {room}</h2>
          <h3>Tu nombre de usuario es {username}</h3>

          <h3>Selecciona una opción:</h3>
          <button disabled={loading} onClick={() => handleChoice('rock')}>
            Piedra 🥌
          </button>
          <button disabled={loading} onClick={() => handleChoice('paper')}>
            Papel 📄
          </button>
          <button disabled={loading} onClick={() => handleChoice('scissors')}>
            Tijeras ✂
          </button>

          <h3>Jugadores en partida:</h3>
          <ul>
            {players.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          {error ? <h3>🔴 Habitación llena, únete o crea una nueva habitación 🔴</h3> : null}

          <form onSubmit={handleJoinRoom}>
            <label htmlFor="username">
              <p>Nombre de usuario</p>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(ev) => {
                  setUsername(ev.target.value);
                }}
              />
            </label>

            <label htmlFor="room">
              <p>Nombre de habitación</p>
              <input
                type="text"
                name="room"
                id="room"
                value={room}
                onChange={(ev) => {
                  setRoom(ev.target.value);
                }}
              />
            </label>

            <br />

            <button type="submit">Conectar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
