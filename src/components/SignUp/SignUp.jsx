'use client';
import React, { useState } from "react";
import SideRight from "../SideRight/SideRight"; 
import Link from "next/link";
import useSignup from "@/customHooks/useSignup";
import { FcGoogle } from "react-icons/fc";



export default function SignUpComponent () {
    const [focusedEmailInput, setFocusedEmailInput] = useState(false); 
    const [focusedPasswordInput, setFocusedPasswordInput] = useState(false); 
    const [focusedNameInput, setFocusedNameInput] = useState(false); 

    const {userSignUp, 
        handleChange, 
        handleSubmit, 
        inputInvalidName,
        inputInvalidEmail, 
        inputInvalidPassword,
        someFieldEmpty,} = useSignup(); 

    const allowNameErrorMessage = () => {
        setFocusedNameInput(true); 
    }

    const allowEmailErrorMessage = () => {
        setFocusedEmailInput(true);
    }
    
    const allowPasswordErrorMessage = () => {
        setFocusedPasswordInput(true);
    }



    return (
        <div className="flex flex-row h-screen	">
            <div className="w-2/4 self-center text-center">
                <h1 className="font-bold text-black text-2xl">REGISTER</h1>
                <h2 className="text-gray-500 mb-5">Pig Commander is the most secure finance App.</h2>
                <div className="flex flex-row justify-center mb-3">
                    <div>
                        <input className="bg-regularGray rounded-lg text-base p-1.5 w-40  relative right-1 focus:outline-none active:outline-none" type="text" value={userSignUp.name} name="name" placeholder="Name" autoComplete="off" onChange={handleChange} onFocus={allowNameErrorMessage} />
                        <input className="bg-regularGray rounded-lg text-base p-1.5 w-40 relative left-1 focus:outline-none active:outline-none" type="text" value={userSignUp.lastName} name="lastName" autoComplete="off" placeholder="Last Name" onChange={handleChange}/>
                        <div className="text-red-400 relative text-xs">{inputInvalidName && focusedNameInput ? ("Only letters in these fields ") : ("")}</div>
                    </div>
                </div>
                 <div className="flex flex-col text-center items-center">
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg mb-3 text-base focus:outline-none active:outline-none" type="mail" value={userSignUp.email} placeholder='Email' name="email" autoComplete="off" onChange={handleChange} onFocus={allowEmailErrorMessage}/>
                    <div className="text-red-400 relative bottom-2.5 text-xs">{inputInvalidEmail && focusedEmailInput ? ("Email invalid") : ("")}</div>
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg text-base focus:outline-none active:outline-none" type="password" value={userSignUp.password} placeholder="Password" autoComplete="off" name="password" onChange={handleChange} onFocus={allowPasswordErrorMessage}/>
                    <div className="text-red-400 relative top-0.5 text-xs text-center w-80">{inputInvalidPassword && focusedPasswordInput ? (<div>This field is <span className="font-bold">required</span>. It must have at least <span className="font-bold"> 1 lowercase </span>letter,  <span className="font-bold"> 1 uppercase</span> letter, <spam className="font-bold">1 number</spam> , <span className="font-bold" >no spaces</span> and a minimum of <span className="font-bold" >8 characters</span>.</div>) : ("")}</div>
                </div>
                <button className={` text-white p-3.5 font-bold cursor-pointer rounded-2xl pl-5 pr-5 mt-8 text-base disabled:cursor-no-drop ${someFieldEmpty ? "bg-mediumGray" : "bg-gradient-to-r from-regularPink to-boldPink" }`} disabled={someFieldEmpty} onClick={handleSubmit}>
                    Register
                </button>
                <h3 className="text-gray-500 mt-5">Already have an account?</h3>
                <Link href="/login"> 
                  <h4 className="text-regularPink font-medium">Login</h4>
                </Link>
                <h4 className="text-gray-500 mt-5">or</h4>
                 <div className="flex justify-center">
                    <div className="flex justify-center w-60 rounded-2xl p-2 bg-white mt-2">
                        <div className="self-center"><FcGoogle/></div>
                        <h2 className="m-1.5 font-semibold text-google">Continue with Google</h2>
                        
                    </div>
                 </div>
            </div>
           <SideRight/>
        </div>
    )
}; 