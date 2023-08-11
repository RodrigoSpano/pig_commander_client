import { createExpense, createIncome } from "@/redux/actions/transactionsActions";
import { useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";


export default function () {

    const [formWallet, setFormWallet] = useState({
        name: "",
        amount: "",
        method_id: 1,
        category_id: 1,
    })

    const [focusedNameInput, setFocusedNameInput] = useState(false);
    const [focusedAmountInput, setFocusedAmountInput] = useState(false);
    const [cookies, setCookie] = useCookies();

    const handleChange = (e) => {
        let parsedValue;
        const { name: fieldName, value } = e.target;
        const shouldParseIntValue = ["category_id", "method_id"].includes(fieldName);
        const shouldParseFloatValue = fieldName === "amount";

        if (shouldParseIntValue) {
            parsedValue = parseInt(value);
        } else if (shouldParseFloatValue) {
            parsedValue = parseFloat(value);
        } else {
            parsedValue = value;
        }

        setFormWallet({
            ...formWallet,
            [fieldName]: parsedValue
        });
    };

    const dispatch = useDispatch();

//EXPENSE
    const handleSubmitExpense = useCallback((event) => {
        event.preventDefault();
        const { token } = cookies;
        dispatch(
            createExpense({
                ...formWallet,
                token,
            })
        )
    }, [formWallet, cookies]);

//INCOME 

    const handleSubmitIncome = useCallback((event) => {
        event.preventDefault();
        const { token } = cookies;
        dispatch(
            createIncome({
                ...formWallet,
                token,
            })
        )
    }, [formWallet, cookies]);


//VALIDACIONES 
        const isName = formWallet.name.length > 0;
        const isAmount = formWallet.amount > 0; 


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
        focusedNameInput,
        handleSubmitExpense,
        handleSubmitIncome
     }
}