import React, { useState } from 'react'
import { Container, FormFC, Link } from './styles'
import { validEmail, validPassword } from '../../utils/Regex'
import Input from '../../components/Input';
import Img from '../../assets/soluslogo.png'
import ButtonGlobal from '../../components/ButtonGlobal';
import { useAuth } from '../../hook/auth';

const Home: React.FC = () => {
    const { signIn } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [inputEmailErr, setInputEmailErr] = useState(false);
    const [inputPassordErr, setInputPasswordErr] = useState(false);

    const validateEmail = ():boolean => {
        if (!validEmail.test(email)) {
            setInputEmailErr(true)
            return false
        } else {
            setInputEmailErr(false)
            return true
        }
    }

    const validatePassword = ():boolean => {
        if (!validPassword.test(password)) {
            setInputPasswordErr(true);
            return false
        } else {
            setInputPasswordErr(false);
            return true
        }
    }


    const handleLogin = () => {
        if(validateEmail() && validatePassword()){
            signIn({
                login: email,
                password: password
            })
        }
    }

    return (
        <Container>
            <FormFC onSubmit={handleLogin}>
                <img src={Img} alt="teste" />
                <Input
                    name="name"
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                {inputEmailErr && <p>Por favor, digite um email valido!</p>}

                <Input
                    name="name"
                    type="password"
                    value={password}
                    placeholder='Senha'
                    onChange={(event) => setPassword(event.target.value)}
                />

                {inputPassordErr && <p>Por favor, digite uma senha mais segura</p>}

                <ButtonGlobal onClick={handleLogin}>
                    Entrar
                </ButtonGlobal>

                <Link to="/create">Cadastrar</Link>
                <Link to="/LoginReset">Esqueceu a senha?</Link>
            </FormFC>
        </Container>
    )
}

export default Home
