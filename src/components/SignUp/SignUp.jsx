'use client';
import React, { useState } from "react";
import SideRight from "../SideRight/SideRight"; 
import Link from "next/link";


export default function SignUpComponent () {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleNameChange = (event) => {
        setName(event.target.value);
  
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);

    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
  
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);

    };

    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email); 

    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/.test(password); 

    const isName = name.length > 1; 

    const isLastName = lastName.length > 1; 

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
    const inputInvalidName = !isName || !isLastName
    const inputInvalidEmail = !isEmail;
    const inputInvalidPassword = !isPassword;


    //boton disable
    const someFieldEmpty = !email || !isPassword || !isName || !isLastName


    return (
        <div className="flex flex-row h-screen	">
            <div className="w-2/4 self-center text-center">
                <h1 className="font-bold text-black text-2xl">REGISTER</h1>
                <h2 className="text-gray-500 mb-5">Pig Commander is the most secure finance App.</h2>
                <div className="flex flex-row justify-center mb-3">
                    <div>
                        <input className="bg-regularGray rounded-lg text-base p-1.5 w-40 relative right-1" type="text" value={name} placeholder="Name" onChange={handleNameChange} />
                        <input className="bg-regularGray rounded-lg text-base p-1.5 w-40 relative left-1" type="text" value={lastName} placeholder="Last Name" onChange={handleLastNameChange}/>
                        <div className="text-red-400 relative text-xs">{inputInvalidName ? ("Only letters in these fields ") : ("")}</div>
                    </div>
                    
                </div>
                 <div className="flex flex-col text-center items-center">
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg mb-3 text-base" type="mail" value={email} placeholder='Email' onChange={handleEmailChange}/>
                    <div className="text-red-400 relative bottom-2.5 text-xs">{inputInvalidEmail ? ("Email invalid") : ("")}</div>
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg text-base" type="password" value={password} placeholder="Password" onChange={handlePasswordChange}/>
                    <div className="text-red-400 relative top-0.5 text-xs text-center w-80">{inputInvalidPassword ? ("This field is required, it must have at least 1 lowercase letter, 1 uppercase letter, 1 number, no spaces and a minimum of 8 characters.") : ("")}</div>
                </div>
                <button className={` text-white p-3.5 font-bold cursor-pointer rounded-2xl pl-5 pr-5 mt-8 text-base disabled:cursor-no-drop ${someFieldEmpty ? "bg-mediumGray" : "bg-gradient-to-r from-regularPink to-boldPink" }`} disabled={someFieldEmpty} onClick={handleSubmit}>
                    Register
                </button>
                <h3 className="text-gray-500 mt-5">Already have an account?</h3>
                <Link href="/login"> 
                  <h4 className="text-regularPink font-medium">Login</h4>
                </Link>
            </div>
           <SideRight/>
        </div>
    )
}; 