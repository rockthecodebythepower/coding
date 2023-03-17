import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

// Nos conectamos por Sockets al servidor que hayamos creado
const socket = io('http://localhost:4001');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [joined, setJoined] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    socket.on('joined', (data) => {
      console.log('Se han unido a la room:', data);
      setJoined(true);
      setPlayers(data.players);
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
  };

  return (
    <div className="App">
      <h1>Piedra, papel y tijeras - Socket.io</h1>

      {joined ? (
        <>
          <h2>Te has unido a la habitación {room}</h2>
          <h3>Tu nombre de usuario es {username}</h3>

          <h3>Jugadores en partida:</h3>
          <ul>
            {players.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </>
      ) : (
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
      )}
    </div>
  );
}

export default App;
