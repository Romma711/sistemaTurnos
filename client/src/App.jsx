import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SideBar } from './components/SideBar'
import { Index } from './pages/Index'
import { Turnos } from './pages/Turnos'
import { Listado } from './pages/Listado'
import { Config } from './pages/Config'
function App() {


  return (
    <>
        
        
        <BrowserRouter>
        <SideBar user=""/>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/turnos" element={<Turnos/>}/>
                <Route path="/listado-turnos" element={<Listado/>}/>
                <Route path="/config" element={<Config/>}/>
            </Routes>
        </BrowserRouter>
    
        </>
  )
}

export default App
