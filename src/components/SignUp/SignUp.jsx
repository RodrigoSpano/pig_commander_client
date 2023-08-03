import React from "react";
import Logo from '@/utils/Images/logoFull.png';
import Image from 'next/image';

export default function SignUpComponent () {
    return (
        <div className="flex flex-row h-screen	">
            <div className="w-2/4 self-center text-center">
                <h1 className="font-bold text-black text-2xl">REGISTER</h1>
                <h2 className="text-gray-500 mb-5">Pig Commander is the most secure finance App.</h2>
                <div className="flex flex-row justify-center mb-3">
                    <input className="bg-regularGray rounded-lg text-base p-1.5 w-40 relative right-1" type="text" placeholder="Name" />
                    <input className="bg-regularGray rounded-lg text-base p-1.5 w-40 relative left-1" type="text" placeholder="Last Name" />
                </div>
                 <div className="flex flex-col text-center items-center">
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg mb-3 text-base" type="mail" placeholder='Email'></input>
                    <input className="bg-regularGray w-2/4 p-1.5 rounded-lg text-base" type="password" placeholder="Password"/>
                </div>
                <button className="bg-gradient-to-r from-regularPink to-boldPink text-white p-3.5 font-bold rounded-2xl pl-5 pr-5 mt-8 text-base" >
                    Register 
                </button>
                <h3 className="text-gray-500 mt-5">Already have an account?</h3>
                <h4 className="text-regularPink font-medium">Login</h4>
            </div>
            <div className="w-2/4 bg-gradient-to-r from-boldPink to-regularPink flex items-center  justify-center ">
                <div className="bg-white rounded-3xl h-3/4 w-3/5 relative  backdrop-opacity-10 backdrop-invert bg-white/30">
                    <div className="relative top-20">
                        <h1 className="text-white font-bold text-center text-5xl">Welcome to</h1>
                        <Image className="h-fit relative top-1/4 " src={Logo} />
                    </div>
                </div>
            </div>
        </div>
    )
}; 