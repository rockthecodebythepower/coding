const JobList = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>

      {/* Cuando me encuentro un array de elementos y quiero renderizarlos en el DOM
      Tengo que recorrer el array y devolver un elemento HTML para cada elemento */}
      <ul className="job-list">
        {props.jobs.map((job, index) => {
          {
            /* Si tengo algo único para cada elemento que mapeo, uso ese valor único
          Si por algún motivo se repite todo y no puedo identificarlos de forma única con la key, uso index */
          }
          return <li key={index}>{job}</li>;
        })}
      </ul>
    </div>
  );
};

export default JobList;
