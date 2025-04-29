import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import { Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {

  return (
    <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element = {Login}></Route>


          </Routes>
        </Router>
    </AuthProvider>
  )
}

export default App
