import React from "react";

export default function LoginContainer () {
    return (
        <div className="flex flex-row h-screen	">
            <div className="w-2/4 self-center text-center">
                <h1 className="font-bold text-black text-2xl">LOGIN</h1>
                <h2 className="text-gray-500 mb-5">Pig Commander is the most secure finance App.</h2>
                 <div className="flex flex-col text-center items-center">
                    <input className="bg-lightGray w-2/4 p-1.5 rounded-lg mb-3 text-base" type="mail" placeholder='Email'></input>
                    <input className="bg-lightGray w-2/4 p-1.5 rounded-lg text-base" type="password" placeholder="Password"/>
                </div>
                <button className="bg-gradient-to-r from-regularPink to-boldPink text-white p-3.5 font-bold rounded-2xl pl-5 pr-5 mt-8 text-base" >
                    Login Now 
                </button>
                <h3 className="text-gray-500 mt-5">Don't have an account?</h3>
                <h4 className="text-regularPink font-medium">Register</h4>
            </div>
            <div className="w-2/4">
            lado 2
            </div>
        </div>
    )
}; 