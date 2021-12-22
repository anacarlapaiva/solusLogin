import styled from 'styled-components';

export const Container = styled.div`
    height: 10vh;
    width: 100%;    
    background: ${(props) => props.theme.colors.background_primary};
    z-index:100;  
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 5%;
    border-bottom: 1px solid #ccc;
`;

export const Logo = styled.img`
    max-width: 70px;
    width: 100%;   
    cursor: pointer;
`;

export const Exit = styled.img`
    max-width: 30px;
    width: 100%;
    cursor: pointer;
`;

export const Content = styled.ul`
    display: flex;    
    width: 100%;
    justify-content: right; 
    align-items: center; 
}
`;

export const Text = styled.a`
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

export const Navigation = styled.li`
    text-decoration: none;
    list-style: none;
    margin-left: 1.875rem;
    margin-right: 1.875rem;
    cursor: pointer;
    font-weight: 500;


    
`;

export const UserName = styled.h4`
    font-weight: 600;
`;




