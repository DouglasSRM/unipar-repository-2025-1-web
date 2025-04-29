import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import { ProtectRoute } from './pages/ProtectRoute'

function App() {

  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Login/>}/>

            <Route path="/home" element={
              <ProtectRoute>
                <Home/>
              </ProtectRoute>
            }/>

            <Route path="/cadastro" element = {<Cadastro/>}/>
          </Routes>
        </BrowserRouter>
    </AuthProvider>
  )
}

export default App
