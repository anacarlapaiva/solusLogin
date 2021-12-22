import React, { useContext } from 'react'

import { Container, Content, Exit, Logo, Navigation, Text, UserName } from './styles'
import { useAuth } from '../../hook/auth'

import Img from '../../assets/soluslogo.png'
import Sair from '../../assets/saida.png'
import useToggleTheme from '../../hook/useToggleTheme'
import { ThemeContext } from 'styled-components'
import Switcher from '../Switcher'
import { LIGHT } from '../../constants/theme'

const Header: React.FC = () => {
    const { dataUser, signOut } = useAuth()
    const { title } = useContext(ThemeContext)
    const { toggleTheme } = useToggleTheme();


    const HandleExit = () => {
        signOut();
    }

    return (
        <Container>
            <Logo src={Img} />
            <Content>
                <Navigation>
                    <Text>Home</Text>
                </Navigation>

                <Navigation>
                <Text>Contato</Text>
                </Navigation>

                <Navigation>
                    {dataUser ? (
                        <UserName>
                            Logado como {dataUser.name}
                        </UserName>
                    )
                        : (
                            <div>Falha</div>
                        )}
                </Navigation>

                <Navigation>
                    <Exit src={Sair} onClick={HandleExit} />
                </Navigation>
                <Switcher onChange={toggleTheme} checked={title === LIGHT} />
            </Content>

        </Container>
    )
}

export default Header
