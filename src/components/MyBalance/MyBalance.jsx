'use client';
import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useVisibility from "@/customHooks/useVisibility";
import SearchBarComponent from '../SearchBar/SearchBarComponent';
import TransactionsPropsContainer from '../Transactions/subcomps/TransactionsPropsContainer';
import PermanentFilter from '../Transactions/subcomps/PermanentFilter';




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
            <hr className='my-2 mx-16 mt-6' />
                <div className='flex items-center justify-around my-4'>
                    <h1 className='text-2xl font-bold text-boldPink'>Transactions</h1>
                    <SearchBarComponent/>
                    <PermanentFilter />
                </div>
                <div className='flex items-center justify-between px-6 py-3 mx-16 my-2 bg-white border border-gray-200 rounded-lg'>
      <div
        className='text-xl font-medium text-gray-700 cursor-pointer hover:text-boldPink'
        
      >
        Name
      </div>
      <div
        className='text-xl font-medium text-gray-700 cursor-pointer hover:text-boldPink'
        
      >
        Amount
      </div>
    </div>
        </div>
    )
}
