import React from 'react'
import Image from 'next/image';
import Tracking from '../../../utils/Images/Features Images/Tracking.png';

const InvestmentTracking = () => {
    return (
        <>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Investment Tracking</h2>
                <p className='text-gray-600'>
                    Keep a detailed record of your investments and evaluate their performance in real time. Make informed decisions about your future investments with the information you need at your fingertips.
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <Image src={Tracking} alt='Savings and Investment' width={400} height={400} />
            </div>
        </>
    )
}

export default InvestmentTracking