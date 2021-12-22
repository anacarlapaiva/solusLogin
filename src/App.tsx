import React from 'react';
import Route from './routes';
import GlobalStyle from './GlobalStyle/global';
import { ThemeProvider } from 'styled-components';
import useToggleTheme from './hook/useToggleTheme';



function App() {
  const { theme } = useToggleTheme()

  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route />
      </ThemeProvider>
    </>
  );
}

export default App;
