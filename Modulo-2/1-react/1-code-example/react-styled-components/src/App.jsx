import Button from "./components/Button"
import Layout from "./components/Layout"
import TextComponent from "./components/Text"
import Title from "./components/Title"

function App() {

  return (
    <div className="App">
      <Layout>
        <Button />
        <TextComponent background="default">Soy un Texto estilado</TextComponent>
        <TextComponent background="coral">Soy otro Texto estilado</TextComponent>
        <Title primary>Styled Components</Title>
      </Layout>

    </div>
  )
}

export default App
