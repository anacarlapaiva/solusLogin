import { Botao } from './styles';

export interface Props {
    children: string;
    onClick: () => void;
    disabled?: boolean
}

const ButtonGlobal: React.FC<Props> = ({children, onClick, disabled, ...props}) => {
    return (
        <div>
            <Botao type='submit' {...props} onClick={onClick}>
                {children}
            </Botao>
        </div>
    )
}

export default ButtonGlobal;