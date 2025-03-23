import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Home.css'
import Home from './Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './Pages/Cadastro.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
