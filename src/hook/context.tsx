import React, { createContext } from 'react'
import { DefaultTheme } from 'styled-components'
import { KEY_LOCAL_STORAGE_THEME } from '../constants/localStorage'
import { LIGHT } from '../constants/theme'
import dark from '../GlobalStyle/Themes/dark'
import light from '../GlobalStyle/Themes/light'
import usePersistedState from './usePersistedState'

export interface ThemeContextData {
    toggleTheme: () => void;
    theme: DefaultTheme;
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeContextProvider: React.FC = ({children}) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>(
        KEY_LOCAL_STORAGE_THEME, light
    );

    function toggleTheme(){
        setTheme(theme.title === LIGHT ? dark : light)
    }

    return (
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )

}
