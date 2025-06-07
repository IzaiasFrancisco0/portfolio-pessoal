import NavBar from './components/NavBar'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Tecnologias from './components/Tecnologias'
import Formulario from './components/Formulario'
import Contato from './components/Contato'

function App() {

  return (
      <div className="bg-gray-900 h-auto scroll-smooth">
        <NavBar />
        <Sobre />
        <Projetos />
        <Tecnologias />
        <Formulario />
        <Contato />
    </div>
  )
}

export default App
