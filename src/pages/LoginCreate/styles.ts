import styled from 'styled-components';
import { Link as LinkButton } from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleCreate = styled.div`
    font-size: 1.5rem;
    margin-bottom: 3rem;
    font-weight: bold;
`;

export const ContentCreate = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    max-width: 28rem;
    width: 100%;
    height: 35rem;
    border-radius: 1rem;
    margin: 0 auto;

    img{
        max-width: 8rem;
        width: 100%;
    }
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

