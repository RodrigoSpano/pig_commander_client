import React from "react";
import Logo from '@/utils/Images/logoFull.png';
import Image from 'next/image';

export default function SignUpComponent () {
    return (
        <div className="w-2/4 bg-gradient-to-r from-boldPink to-regularPink flex items-center justify-center ">
                <div className="bg-white rounded-3xl h-3/4 w-3/5  backdrop-opacity-10 backdrop-invert bg-white/30 items-center justify-center">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-white font-bold text-center text-5xl">Welcome to</h1>
                        <Image src={Logo} alt="logo" />
                    </div>
                </div>
     </div>
    )
}
