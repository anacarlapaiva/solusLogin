import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ce275f;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scrollbar-width: auto;
    scrollbar-color: #ce275f #ffffff;
    
}

body{
    font-size: 1rem;
    color: #333;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props) => props.theme.colors.background_primary};
    color: ${(props) => props.theme.colors.text};
} 

h1{
  font-size: 2rem;  
}

p{
   margin-top: -1.5rem;
  margin-bottom: 1.5rem;
  color: #f00;
}

`;