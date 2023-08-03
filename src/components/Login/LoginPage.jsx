'use client'; 
import React, { useState } from "react";
import SideRight from "../SideRight/SideRight"



export default function LoginContainer () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
  
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);

    };

    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email); 

    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/.test(password); 


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
    const someFieldEmpty = !email || !isPassword


    return (
        <div className="flex flex-row h-screen">
            <div className="w-2/4 self-center text-center">
                <h1 className="font-bold text-black text-2xl">LOGIN</h1>
                <h2 className="text-gray-500 mb-5">Pig Commander is the most secure finance App.</h2>
                <div className="flex flex-col text-center items-center">
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg mb-3 text-base " type="mail" value={email} placeholder='Email' onChange={handleEmailChange}></input>
                    <div className="text-red-400 relative bottom-2.5 text-xs">{inputInvalidEmail ? ("Email invalid") : ("")}</div>
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg text-base" type="password" value={password} placeholder="Password" onChange={handlePasswordChange} min="8" required />
                    <div className="text-red-400 relative top-0.5 text-xs text-center w-80">{inputInvalidPassword ? ("This field is required, it must have at least 1 lowercase letter, 1 uppercase letter, 1 number, no spaces and a minimum of 8 characters.") : ("")}</div>
                </div>
                <button className={` text-white p-3.5 font-bold cursor-pointer rounded-2xl pl-5 pr-5 mt-8 text-base disabled:cursor-no-drop ${someFieldEmpty ? "bg-mediumGray" : "bg-gradient-to-r from-regularPink to-boldPink" }`} disabled={someFieldEmpty} onClick={handleSubmit}>
                    Login Now
                </button>
                <h3 className="text-gray-500 mt-5">Don't have an account?</h3>
                <h4 className="text-regularPink font-medium">Register</h4>
            </div>
            <SideRight/>
        </div>
    )
}; 