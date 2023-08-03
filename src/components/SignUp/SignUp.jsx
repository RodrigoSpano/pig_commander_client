'use client';
import React from "react";
import SideRight from "../SideRight/SideRight"; 
import Link from "next/link";
import useSignup from "@/customHooks/useSignup";


export default function SignUpComponent () {

    const {userSignUp, 
        handleChange, 
        handleSubmit, 
        inputInvalidName,
        inputInvalidEmail, 
        inputInvalidPassword,
        someFieldEmpty,} = useSignup(); 

    return (
        <div className="flex flex-row h-screen	">
            <div className="w-2/4 self-center text-center">
                <h1 className="font-bold text-black text-2xl">REGISTER</h1>
                <h2 className="text-gray-500 mb-5">Pig Commander is the most secure finance App.</h2>
                <div className="flex flex-row justify-center mb-3">
                    <div>
                        <input className="bg-regularGray rounded-lg text-base p-1.5 w-40 relative right-1" type="text" value={userSignUp.name} name="name" placeholder="Name" onChange={handleChange} />
                        <input className="bg-regularGray rounded-lg text-base p-1.5 w-40 relative left-1" type="text" value={userSignUp.lastName} name="lastName" placeholder="Last Name" onChange={handleChange}/>
                        <div className="text-red-400 relative text-xs">{inputInvalidName ? ("Only letters in these fields ") : ("")}</div>
                    </div>
                </div>
                 <div className="flex flex-col text-center items-center">
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg mb-3 text-base" type="mail" value={userSignUp.email} placeholder='Email' name="email" onChange={handleChange}/>
                    <div className="text-red-400 relative bottom-2.5 text-xs">{inputInvalidEmail ? ("Email invalid") : ("")}</div>
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg text-base" type="password" value={userSignUp.password} placeholder="Password" name="password" onChange={handleChange}/>
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