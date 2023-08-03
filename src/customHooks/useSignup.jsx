import React, { useState } from "react";

export default function () {

    const [userSignUp, setUserSignUp] = useState({
        name:"",
        lastName:"",
        email: "", 
        password: "", 
    })
  

    const handleChange = (e) => {
        setUserSignUp({
            ...userSignUp, 
            [e.target.name]: e.target.value
        });
    };

    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userSignUp.email); 

    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/.test(userSignUp.password); 

    const isName = userSignUp.name.length > 1; 

    const isLastName = userSignUp.lastName.length > 1; 


    // mandar siemre y cuando ningun espacio este vacio 
    const handleSubmit = (event) => {
        //para que no salte de pagina
        event.preventDefault();
        if (isName) return; 
        if (isLastName) return;
        if (isEmail) return;
        if (isPassword) return;
    }

    //validaciones de input
    const inputInvalidName = !isName || !isLastName;
    const inputInvalidEmail = !isEmail;
    const inputInvalidPassword = !isPassword;

    //boton disable
    const someFieldEmpty = !isEmail || !isPassword || !isName || !isLastName

    return {
        userSignUp, 
        handleChange, 
        handleSubmit, 
        inputInvalidName,
        inputInvalidEmail, 
        inputInvalidPassword,
        someFieldEmpty, 
    }
}