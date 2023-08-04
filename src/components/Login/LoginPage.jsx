'use client'; 
import React, { useState } from "react";
import SideRight from "../SideRight/SideRight";
import Link from "next/link";
import useLogin from "@/customHooks/useLogin";
import { FcGoogle } from "react-icons/fc";


export default function LoginContainer () {
    const [focusedEmailInput, setFocusedEmailInput] = useState(false); 
    const [focusedPasswordInput, setFocusedPasswordInput] = useState(false); 

    const {
        userLogin,
        handleSubmit, 
        inputInvalidPassword, 
        handleChange, 
        inputInvalidEmail, 
        someFieldEmpty
    } = useLogin(); 

    const allowEmailErrorMessage = () => {
        setFocusedEmailInput(true);
    }

    const allowPasswordErrorMessage = () => {
        setFocusedPasswordInput(true);
    }

    return (
        <div className="flex flex-row h-screen">
            <div className="w-2/4 self-center text-center">
                <h1 className="font-bold text-black text-2xl">LOGIN</h1>
                <h2 className="text-gray-500 mb-5">Pig Commander is the most secure finance App.</h2>
                <div className="flex flex-col text-center items-center">
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg mb-3 text-base focus:outline-none active:outline-none" type="mail" name="email" value={userLogin.email} placeholder='Email' autoComplete="off" onChange={handleChange} onFocus={allowEmailErrorMessage}></input>
                    <div className="text-red-400 relative bottom-2.5 text-xs">{(inputInvalidEmail && focusedEmailInput) ? ("Email invalid") : ("")}</div>
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg text-base focus:outline-none active:outline-none" type="password" name="password" value={userLogin.password} placeholder="Password" autoComplete="off" onChange={handleChange} min="8" required onFocus={allowPasswordErrorMessage} />
                    <div className="text-red-400 relative top-0.5 text-xs text-center w-80">{(inputInvalidPassword && focusedPasswordInput) ? ("This field is required") : ("")}</div>
                </div>
                <button className={` text-white p-3.5 font-bold cursor-pointer rounded-2xl pl-5 pr-5 mt-8 text-base disabled:cursor-no-drop ${someFieldEmpty ? "bg-mediumGray" : "bg-gradient-to-r from-regularPink to-boldPink"}`} disabled={someFieldEmpty} onClick={handleSubmit}>
                    Login Now
                </button>
                <h3 className="text-gray-500 mt-5">Don't have an account?</h3>
                <Link href="/signup">
                    <h4 className="text-regularPink font-medium">Register</h4>
                </Link>
                <h4 className="text-gray-500 mt-5">or</h4>
                <div className="flex justify-center">
                    <div className="flex justify-center w-60 rounded-2xl p-2 bg-white mt-2">
                        <div className="self-center"><FcGoogle /></div>
                        <h2 className="m-1.5 font-semibold text-google cursor-pointer">Continue with Google</h2>
                    </div>
                </div>
            </div>
            <SideRight />
        </div>
    )
}; 