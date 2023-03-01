import './App.css';
import JobList from './components/JobList';
import PersonalInfo from './components/PersonalInfo';

// renderizar => pintar/inyectar en el DOM y ejecutar el codigo de mi componente
function App() {
  const myName = 'Cristian';
  const myAge = 30;
  const isTeacher = true;
  const experience = {
    job: 'developer',
    years: 5,
  };
  const myJobs = [
    'splashthat',
    'taxdown',
    'wordlist',
    'olympic channel',
  ];

  const nonDevelopmentJobs = [
    'camarero',
    'arbitro',
    'profesor',
  ];

  return (
    <div className="App">
      <h1>Hola clase!</h1>

      <PersonalInfo name={myName} age={myAge} />
      {/* <PersonalInfo name={'YETI'} age={46} />
      <PersonalInfo name={'Manu'} age={35} /> */}
      {/* PersonalInfo(myName, myAge) */}

      <p id="teacher-text">
        Es profesor:{' '}
        {isTeacher ? (
          <span className="yes">Sí</span>
        ) : (
          <span className="no">No</span>
        )}
      </p>

      <p>
        Trabajo como <u>{experience.job}</u> y tengo{' '}
        <u>{experience.years}</u> años de experiencia
      </p>

      <JobList
        title={'Trabajos de desarrollo'}
        jobs={myJobs}
      />

      <JobList
        title={'Otros trabajos'}
        jobs={nonDevelopmentJobs}
      />
    </div>
  );
}

export default App;
