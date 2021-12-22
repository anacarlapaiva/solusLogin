import styled from 'styled-components';

export const Botao = styled.button`
  cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 2.5rem;
    border-radius: 1.5rem;
    background-color: #ce275f;
    color: #fff;
    border: none;
    margin-bottom: 2rem;

  &:hover, 
  &:focus{
      background-color: #a4c; 
      transition: .5s;
      outline: none;
      box-shadow: none;   
      }

  }  
    
`;
