import React from "react";
import Logo from '@/utils/Images/logoFull.png';
import Image from 'next/image';

export default function SignUpComponent () {
    return (
        <div className="w-2/4 bg-gradient-to-r from-boldPink to-regularPink flex items-center  justify-center ">
                <div className="bg-white rounded-3xl h-3/4 w-3/5 relative  backdrop-opacity-10 backdrop-invert bg-white/30">
                    <div className="relative top-20">
                        <h1 className="text-white font-bold text-center text-5xl">Welcome to</h1>
                        <Image className="h-fit relative top-1/4 " src={Logo} />
                    </div>
                </div>
     </div>
    )
}
