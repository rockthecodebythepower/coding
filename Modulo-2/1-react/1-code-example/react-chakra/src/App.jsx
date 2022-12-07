import Avatars from "./components/Avatars"
import CodeRock from "./components/CodeRock"
import CollapseRock from "./components/CollapseRock"
import DrawerRock from "./components/DrawerRock"
import GridRock from "./components/GridRock"
import MenuWap from "./components/MenuWap"
import TextBea from "./components/TextBea"
import TextComponent from "./components/TextComponent"


import './styles/global.css'

const configText = {
  fontSize: '3xl',
  color: 'tomato',
  style: {
    backgroundColor: 'black',
  }
}

function App() {
  return (
    <div className="App">
      <MenuWap title="🍑" />
      {/* <Avatars />
      <CodeRock />
      <CollapseRock />
      <GridRock /> */}
      <TextBea>Soy un componente con styles de Bea</TextBea>
      <TextBea>Soy un componente con styles de Bea</TextBea>
      <TextBea>Soy un componente con styles de Bea</TextBea>
      {/* <TextComponent config={configText}>Hola soy un texto y soy el children</TextComponent>
      <TextBea>Soy un componente con styles de Bea</TextBea> */}
    </div>
  )
}

export default App
