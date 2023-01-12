import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import { HomeUI } from './ui/Display'

function App() {
  return (
    <HomeUI>
      <CategoryList />
      <ProductList title="La tecnología que necesitas" type="technology" />
      <ProductList title="Vuelta a la rutina" type="routine" />
    </HomeUI>
  )
}

export default App
