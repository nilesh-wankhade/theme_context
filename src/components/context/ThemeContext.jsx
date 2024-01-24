import { createContext, useState , useEffect} from "react";
import { useContext } from "react";

export const ThemeContext = createContext()

export const useTheme = ()=>{
    return useContext(ThemeContext)
}

export const ThemeProvider = ({children})=>{
    const [isThemeMode, setIsThemeMode] = useState(false)

    const toggleTheme=()=>{
        setIsThemeMode((prev)=> !prev)
    }

    const theme = isThemeMode?'dark':'light'
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
     }, [isThemeMode])
     

    return(
       <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
       </ThemeContext.Provider>
    )

    
}
