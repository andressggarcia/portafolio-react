import { useState } from 'react'
import './App.css'
import Contacto from './components/Contacto'
import Habilidades from './components/Habilidades'
import Home from './components/Home'
import Menu from './components/Menu'

import Proyectos from './components/Proyectos'
import SobreMi from './components/SobreMi'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      < Menu />
     <Home />
     <SobreMi />
     <Habilidades />
     <Proyectos />
     <Contacto />
    </div>
  )
}

export default App
