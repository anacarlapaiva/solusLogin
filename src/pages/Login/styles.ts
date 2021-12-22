import styled from "styled-components";
import { Link as LinkButton } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 3rem 0;
`;


export const TitleText = styled.h1`
    
`;

export const Link = styled(LinkButton)`
    text-decoration: none;
    margin-bottom: .5rem;
    position: relative;

    &:hover{
        color: #a4c;        
        -webkit-transition: all 0.3s ease-in-out 0s;
        transition: all 0.3s ease-in-out 0s;
    }

    &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #a4c;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
    }

    &:hover::before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
`;

export const FormFC = styled.form`
    background-color:#fff;
    padding: 3rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 28rem;
    width: 100%;
    margin: 0 auto;

    

    img {
    max-width: 8rem;
    margin-bottom: 2rem;
    } 
     
`;