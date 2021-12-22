import styled from "styled-components";

export const Container = styled.div`
    max-width: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const InputFC = styled.input`
    border: none;
    border-bottom: 1px solid #ccc;
    display: block;
    width: 100%;
    max-width: 15rem;
    font-size: 1rem;
    padding-bottom: 0.3rem;
    background: #eee;
    transition: 0.2s;
    margin-bottom: 1.8rem;
    background-color: transparent;
    height: 2rem;

    &:focus,
    :hover {
    outline: none;
    

  &::placeholder{
    color: #a11544;
  }
}
`;

export const LabelFC = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 0.3rem;
width: 100%;
color: #a11544;
`;