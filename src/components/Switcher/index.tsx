import React from 'react'
import { Container, Icon, IconOff, IconOn } from './styles'
import IconeOff from '../../assets/desligar.png'
import IconeOn from '../../assets/desligar.png'


export interface Props {
    onChange: () => void;
    checked: boolean
}

const Switcher: React.FC<Props> = ({onChange, checked}) => {
    return (
        <Container>
            <Icon onClick={onChange}>
                {checked ? (
                    <IconOff src={IconeOff} alt="Icone off" />) :

                    (<IconOn src={IconeOn} alt="Icone onn"/> 
                )}
            </Icon>
        </Container>
    )
}

export default Switcher
