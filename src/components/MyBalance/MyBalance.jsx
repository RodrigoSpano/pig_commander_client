'use client';
import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useVisibility from "@/customHooks/useVisibility";




export default function WalletComponent () {

    const {showPassword, togglePasswordVisibility} = useVisibility(); 
    return (
        <div>
            <div>
                <div className='bg-mediumPink h-7 rounded-t-lg'></div>
                <h1 className='font-bold ml-5 mt-2.5 text-xl'>My Balance</h1>
                <div className='flex flex-row'>
                    <div className='text-regularPink text-7xl font-semibold mt-5 ml-5 '>$ 30.000</div>
                    <span
                        className="flex items-center cursor-pointer ml-2 focus:outline-none text-gray-500 text-2xl"
                        onClick={togglePasswordVisibility}>
                        {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </span>

                </div>

                <div className='flex justify-end mr-5'>
                    <button className='bg-regularPink text-white font-bold h-7 w-36 rounded-xl'>Create Category</button>
                </div>
            </div>
            <div className='flex place-content-center'>
              <div className='w-4/5 h-0.5 bg-regularGray mt-6'></div>
            </div>
            
        </div>
    )
}
