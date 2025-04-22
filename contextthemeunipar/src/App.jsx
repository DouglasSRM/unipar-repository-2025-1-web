import './App.css'
import { useTheme } from './components/ThemeContext'

function App() {

const {theme, mudarTema} = useTheme();

  const styleTheme = {
    backgroundColor : theme == 'light' ? '#fff' : '#333',
    color: theme == 'light' ? '#333' : '#fff',
    height: '100vh'
  }

  return (
    <div style={styleTheme}>

      <h1>Seu tema atual é: {theme}</h1>

    <button onClick={mudarTema}>{theme == 'dark' ? "Mudar para tema claro" : "Mudar para tema escuro"}</button>

    </div>
  )
}

export default App
