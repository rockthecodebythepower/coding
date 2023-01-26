const PersonalInfo = (props) => {
  return (
    <p>
      Mi nombre es <b>{props.name}</b> y tengo{' '}
      <span className="large-text">{props.age}</span> años
    </p>
  );
};

export default PersonalInfo;
