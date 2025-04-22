import { useContext, useState, createContext } from "react"
//Responsável por gerar um espaço compartilhado
const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light')

    const mudarTema = () => {
        setTheme((prev) => prev == 'light' ? 'dark' : 'light')
    }

    return (
         <ThemeContext.Provider value={{theme, mudarTema}}>
            {children}
         </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)