'use client'
import { useEffect, useState } from 'react'

const usePagination = () => {
    const TRANSACTION_PER_PAGE = 3;

    const transactionsState = [{name: 'trans1'},{name: 'trans2'},{name: 'trans3'},{name: 'trans4'},{name: 'trans5'},{name: 'trans6'},{name: 'trans7'},{name: 'trans8'},{name: 'trans9'},{name: 'trans10'}]

    const [prev, setPrev] = useState(0)
    const [next, setNext] = useState(TRANSACTION_PER_PAGE)
    const [count, setCount] = useState(1); //? para que haga el cambio de pagina

    let transactions = transactionsState.slice(prev, next) //? para mostrar de 3 en 3
    
    const totalPages = Math.ceil(transactionsState.length / TRANSACTION_PER_PAGE); //total de paginas que va a tener mi SPA
    
    const nextHandler = () => {
        if (count < totalPages) {
            setNext(next + TRANSACTION_PER_PAGE); //? aumenta el valor de next para mostrar la siguiente pag
            setPrev(prev + TRANSACTION_PER_PAGE); //? Aumenta el valor de 'prev' para mantener la coherencia de los perros mostrados en la página.
            setCount(count + 1);    //? Aumentamos el valor de 'count' para indicar la página actual.
        }
    }

    const prevHandler = () => {
        if (count > 1) {
            if (prev - TRANSACTION_PER_PAGE <= 0) {   //esta verificacion es para cuando estemos en la primera pagina
                setPrev(0)  //? para que no se pueda seguir yendo para atras 
                setNext(TRANSACTION_PER_PAGE) //? para mostrar los perros de la primer pag 
            }
            else if (prev - 3 >= 0) {  //esta verificacion es para cuando NO estemos en la primera pagina
                setPrev(prev - TRANSACTION_PER_PAGE)  //? se reduce prev para saber si se puede seguir yendo para atras
                setNext(next - TRANSACTION_PER_PAGE)  //? Aumentamos el valor de 'count' para indicar la página actual.
            }
            setCount(count - 1) //? se reduce el valor de count para indicar la nueav pagina actual
        }
    }

    const firstPageHandler = () => {
        setPrev(0);                 //? se establece el valor de prev en 0 para mostrar la primera pag
        setNext(TRANSACTION_PER_PAGE);    //? se establece el valor de 'next' en el número de perros por pág para mostrar los perros de la primera pág
        setCount(1);
    }

    const lastPageHandler = () => {
        setPrev((totalPages - 1) * TRANSACTION_PER_PAGE); //? Establece el valor de 'prev' en el índice del primer perro de la última página
        setNext(totalPages * TRANSACTION_PER_PAGE);   //? Establece que al navegar a la última página, se muestren los perros desde el índice correcto en la interfaz de usuario 
        setCount(totalPages);   //? indica que esta en la ultima pagina
    };

    useEffect(() => {   //? cada vez que la longitud de 'dogsState' cambia, irá a la primera página automáticamente
        firstPageHandler()
    }, [transactionsState.length])

    return { nextHandler, prevHandler, firstPageHandler, lastPageHandler, totalPages, count, transactions }
}

export default usePagination;