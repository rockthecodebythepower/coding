import './App.css'
import Food from './components/Food'

const foods = [
  { name: 'pizza', calories: 1400 },
  { name: 'hamburger', calories: 1000 },
  { name: 'fish and chips', calories: 600 },
  { name: 'salad', calories: 400 },
];


function App() {
  // console.log(arrayFoods);
  const listFoods = foods.map() => {

  }
  
  return (
    <div className="App">
    
    <Food listFoods/>
    
    </div>
  )
}
export default App



