import { useState } from "react"; 


export default function () {

    const [formWallet, setFormWallet] = useState({
        name: "", 
        mount: "", 
    })

    const [focusedNameInput, setFocusedNameInput] = useState(false); 
    const [focusedMountInput, setFocusedMountInput] = useState(false); 

   
    const handleChange = (e) => {
        setFormWallet({
            ...formWallet, 
            [e.target.name]: e.target.value
        });
    };

    const isName = formWallet.name.length > 0;
    const isMount = formWallet.mount.length > 0; 


       //validaciones de input
       const inputInvalids = !isName || !isMount;

    //boton disable
    const someFieldEmpty = !isName || !isMount; 

    const allowNameErrorMessage = () => {
        setFocusedNameInput(true);
    }

    const allowMountErrorMessage = () => {
        setFocusedMountInput(true);
    }



    return {
        formWallet,
        inputInvalids,
        handleChange,
        someFieldEmpty, 
        allowMountErrorMessage,
        allowNameErrorMessage,
        focusedMountInput,
        focusedNameInput
     }
}