import { useState } from "react"; 


export default function () {

    const [formWallet, setFormWallet] = useState({
        name: "", 
        amount: "", 
    })

    const [focusedNameInput, setFocusedNameInput] = useState(false); 
    const [focusedAmountInput, setFocusedAmountInput] = useState(false); 

   
    const handleChange = (e) => {
        setFormWallet({
            ...formWallet, 
            [e.target.name]: e.target.value
        });
    };

    const isName = formWallet.name.length > 0;
    const isAmount = formWallet.amount.length > 0; 


       //validaciones de input
       const inputInvalids = !isName || !isAmount;

    //boton disable
    const someFieldEmpty = !isName || !isAmount; 

    const allowNameErrorMessage = () => {
        setFocusedNameInput(true);
    }

    const allowAmountErrorMessage = () => {
        setFocusedAmountInput(true);
    }



    return {
        formWallet,
        inputInvalids,
        handleChange,
        someFieldEmpty, 
        allowAmountErrorMessage,
        allowNameErrorMessage,
        focusedAmountInput,
        focusedNameInput
     }
}