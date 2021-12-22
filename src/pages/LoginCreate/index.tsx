import React, { useState } from 'react'
import ButtonGlobal from '../../components/ButtonGlobal';
import Input from '../../components/Input';
import { Container, ContentCreate, TitleCreate } from './styles';
import ImgRegister from '../../assets/soluslogo.png'
import { Link } from 'react-router-dom';


const LoginCreate: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [inputConfirmPassordErr, setInputConfirmPassordErr] = useState(false)

    const handleRegister = async (): Promise<void> => {  
        if(password !== confirmPassword){
            setInputConfirmPassordErr(true)
        }else{
            setInputConfirmPassordErr(false)

        }

    }

    return (
        <Container>
            <ContentCreate>
                <img src={ImgRegister} alt="teste" />
                <TitleCreate>
                    Crie sua conta
                </TitleCreate>
                <Input
                    name="email"
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <Input
                    name="password"
                    type="text"
                    placeholder='Senha'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <Input
                    name="confirmPassword"
                    type="text"
                    placeholder='Confirmar Senha'
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                />
                {inputConfirmPassordErr && <p>Por favor, verifique se as senhas são iguais.</p>}

                <ButtonGlobal onClick={handleRegister}>
                    Cadastrar
                </ButtonGlobal>
                <Link to="/"> Voltar </Link>
            </ContentCreate>
        </Container>
    )
}

export default LoginCreate;
