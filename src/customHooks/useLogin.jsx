import { loginUser } from "@/redux/actions/userActions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from 'next/navigation';

export default function () {
    const router = useRouter()
    const dispatch = useDispatch();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    })

    const [focusedEmailInput, setFocusedEmailInput] = useState(false);
    const [focusedPasswordInput, setFocusedPasswordInput] = useState(false);

    const handleChange = (e) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        });
    };

    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userLogin.email);

    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/.test(userLogin.password);


    // mandar siemre y cuando ningun espacio este vacio 
    const handleSubmit = (event) => {
        event.preventDefault();

        //loginUser = action
        dispatch(loginUser(userLogin))
            .then((resp) => {
                if (resp.payload?.logged) {
                    router.push('/home/dashboard')
                }
            })
    }

    //validaciones de input
    const inputInvalidEmail = !isEmail;
    const inputInvalidPassword = !isPassword;

    //boton disable
    const someFieldEmpty = !isEmail || !isPassword

    const allowEmailErrorMessage = () => {
        setFocusedEmailInput(true);
    }

    const allowPasswordErrorMessage = () => {
        setFocusedPasswordInput(true);
    }

    return {
        userLogin,
        handleChange,
        handleSubmit,
        inputInvalidEmail,
        inputInvalidPassword,
        someFieldEmpty,
        focusedEmailInput,
        focusedPasswordInput,
        allowEmailErrorMessage,
        allowPasswordErrorMessage
    }
}