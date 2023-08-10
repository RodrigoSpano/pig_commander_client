import { createExpense } from "@/redux/actions/transactionsActions";
import { useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";


export default function () {

    //VALIDACIONES
    const [formWallet, setFormWallet] = useState({
        name: "",
        amount: "",
        method_id: "",
        category_id: "",
    })

    const [focusedNameInput, setFocusedNameInput] = useState(false);
    const [focusedAmountInput, setFocusedAmountInput] = useState(false);
    const [cookies, setCookie] = useCookies();

    const handleChange = (e) => {
        console.log({ [e.target.name]: e.target.value });
        if((e.target.name == "method_id" )||(e.target.name == "category_id)")){
            setFormWallet({
                ...formWallet,
                [e.target.name]: parseInt(e.target.value)
            });
        }
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

    //POST

    const dispatch = useDispatch();


    const handleSubmitExpense = useCallback((event) => {
        event.preventDefault();
        console.log(formWallet)
        const { token } = cookies;
        dispatch(
            createExpense({
                formWallet, token,
            })
        )
    }, [formWallet, cookies]);

    return {
        formWallet,
        inputInvalids,
        handleChange,
        someFieldEmpty, 
        allowAmountErrorMessage,
        allowNameErrorMessage,
        focusedAmountInput,
        focusedNameInput,
        handleSubmitExpense
     }
}