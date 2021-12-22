import { Dispatch, SetStateAction, useState, useEffect } from "react";
//O T é um genérico para um valor inicial /// Dispatch -> Executa uma ação
//Cria uma ação dentro do valor inicial (T)
type Response<T> = [T, Dispatch<SetStateAction<T>>]
//Guardar o valor quando trocar o tema / atualizar a página
function usePersistedState<T>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);
        if (storageValue) {
            return JSON.parse(storageValue);
        } else {
            return initialState;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    //Dentro do array, passar o que quiser ser re-renderizado quando atualizar a página
    }, [key, state])
    return [state, setState]
}

export default usePersistedState;
