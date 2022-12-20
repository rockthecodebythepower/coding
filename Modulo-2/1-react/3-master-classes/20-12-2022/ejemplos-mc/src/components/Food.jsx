// props => Properties
// {
//   food: 'Hamburguesa',
//   calories: 1200,
// }
const Food = (props) => {
  return (
    <div>
      <h3>Comida: {props.food}</h3>
      <p>Calorias: {props.calories}</p>
    </div>
  );
};

export default Food;
