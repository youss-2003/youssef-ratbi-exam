
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contacts from './Pages/Contacts'
import Erreur from './Pages/Erreur'
import Home from './Pages/Home'




function App() {
 
  return <> 
      <Routes>
      <Route  path="/" element={<Home />} />
      <Route  path="/contact" element={<Contacts/>} />
      <Route  path="*" element={<Erreur />} />
    </Routes>
    </>
  
}

export default App
