import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface IDataUser{
    name : string,
    age: string,
    email: string
}

interface IUserAuthenticate{
    login: string,
    password: string
}

// % nº 1
interface IAuthContext{
    signIn: (dataLogin: IUserAuthenticate) => void;
    dataUser: IDataUser | null,
    signOut: () => void;
}

// Criamos um contexto para ser utilizado na aplicação e informamos uma tipagem % nº1
const AuthContext = createContext<IAuthContext>(
    {} as IAuthContext,
);
    
// Criando um componente pai para poder utilizar as informações do contexto
const AuthProvider: React.FC = ({children}) => { 
    const navigate =useNavigate()
    const [dataUser, setDataUser] = useState<IDataUser | null>(null)

    useEffect(() => {
        const existUser = localStorage.getItem('DATA_USER');
        if(existUser){
            setDataUser(JSON.parse(existUser));
            navigate('/dashboard')
        }else{
            navigate('/')
        }

    },[])

    // Metodo global para ser acessado nos filhos(children)
    const getAUserFromApi = async (emailUser:string): Promise<any> => {
        const responseGetUser = await fetch(`http://localhost:5000/users/${emailUser}`,{
            method: 'GET',
         })
         const dataGetUser = await responseGetUser.json();
         console.log(dataGetUser)
         return dataGetUser
    } 
    const signIn = (dataLogin: IUserAuthenticate): void =>{
        console.log(dataLogin);
        
        const dataUser = getAUserFromApi(dataLogin.login)
        
        const responseApiAuth = {
            age: '22 Anos',
            name: 'Ana',
            email: 'ana@gmail.com'
        } 
        setDataUser({
            age: '22 Anos',
            name: 'Ana',
            email: 'ana@gmail.com'
        });

        localStorage.setItem('DATA_USER',JSON.stringify(responseApiAuth))
        
        navigate('/dashboard')
    }

    const signOut = (): void => {
        localStorage.removeItem('DATA_USER')
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{
            signIn,
            dataUser,
            signOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// Criando hook para ser utilizado na aplicação  
const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error(
        'useAuthContext must be used within a AuthProvider',
      );
    }
    return context;
  }
  
// exportando provider para a aplicação e o hook para a importação
export { AuthProvider, useAuth };
  