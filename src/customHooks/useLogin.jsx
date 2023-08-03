import React, { useState } from "react";

export default function () {

    const [userLogin, setUserLogin] = useState({
        email: "", 
        password: "", 
    })
  

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
        //para que no salte de pagina
        event.preventDefault();
        if (isEmail) return;
        if (isPassword) return;
      
    }

    //validaciones de input
    const inputInvalidEmail = !isEmail;
    const inputInvalidPassword = !isPassword;

    //boton disable
    const someFieldEmpty = !isEmail || !isPassword

    return {
        userLogin, 
        handleChange, 
        handleSubmit, 
        inputInvalidEmail, 
        inputInvalidPassword,
        someFieldEmpty, 
    }
}