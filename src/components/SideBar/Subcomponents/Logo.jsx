import React from 'react'
import Image from "next/image";
import LogoImage from "../../../utils/Images/image.png";

const Logo = () => {
    return (
        <div className='flex justify-around items-center my-4'>
            <div>
                <Image src={LogoImage} width={40} />
            </div>
            <div className='font-bold text-xl'>
                Pig Commander
            </div>
        </div>
    )
}

export default Logo