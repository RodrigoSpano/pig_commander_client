import React from 'react'
import Image from 'next/image';
import Limit from '../../../utils/Images/Features Images/Limit.png';


const LimitPerMonth = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Image src={Limit} alt='Record Expenses' width={400} height={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Spending Limit per Month</h2>
                <p className='text-gray-600 dark:text-lightGrey'>
                    Keep your finances under control by setting a spending limit per month. You'll receive notifications when you get close to this limit, helping you make more conscious decisions about your spending.
                </p>
            </div>
        </>
    )
}

export default LimitPerMonth