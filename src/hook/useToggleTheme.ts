import { useContext } from 'react'
import { ThemeContext } from './context'

const useToggleTheme = () => {
    const contextUse = useContext(ThemeContext)
    return contextUse;
}

export default useToggleTheme
