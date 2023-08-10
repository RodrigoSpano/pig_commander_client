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
    const [focusedMountInput, setFocusedMountInput] = useState(false);
    const [cookies, setCookie] = useCookies();

    const handleChange = (e) => {
        console.log({ [e.target.name]: e.target.value });
        setFormWallet({
            ...formWallet,
            [e.target.name]: e.target.value
        });
    };

    const isName = formWallet.name.length > 0;
    const isMount = formWallet.amount.length > 0;


    //validaciones de input
    const inputInvalids = false;
    // !isName || !isMount 

    //boton disable
    const someFieldEmpty = false;
    // !isName || !isMount 

    const allowNameErrorMessage = () => {
        setFocusedNameInput(true);
    }

    const allowMountErrorMessage = () => {
        setFocusedMountInput(true);
    }

    //POST

    const dispatch = useDispatch();


    const handleSubmitExpense = useCallback((event) => {
        event.preventDefault();
        const { token } = cookies;
        const { name, amount, method_id, category_id } = formWallet;
        console.log({ token, cookies });
        dispatch(
            createExpense({
                name, mount: amount, method_id, category_id, token,
            })
        )
    }, [formWallet, cookies]);

    return {
        formWallet,
        inputInvalids,
        handleChange,
        someFieldEmpty,
        allowMountErrorMessage,
        allowNameErrorMessage,
        focusedMountInput,
        focusedNameInput,
        handleSubmitExpense,
    }
}