import React from 'react'
import Image from 'next/image';
import Budget from '../../../utils/Images/Features Images/Budget.png';

const BudgetComponent = () => {
    return (
        <>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Budget</h2>
                <p className='text-gray-600'>
                    Create and manage your budget effectively with the help of Pig Commander. Set realistic financial goals and keep your finances on track.
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <Image src={Budget} alt='Savings and Investment' width={600} height={600} />
            </div>
        </>
    )
}

export default BudgetComponent