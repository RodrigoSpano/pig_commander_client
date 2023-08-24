import React from 'react'
import Image from 'next/image';
import SavingGoalsImage from '../../../utils/Images/Features Images/SavingGoals.png';

const SavingGoals = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Image src={SavingGoalsImage} alt='Record Expenses' width={400} height={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Savings Goals</h2>
                <p className='text-gray-600 dark:text-lightGrey'>
                    Set achievable savings goals and track your progress. Pig Commander will keep you motivated as you get closer and closer to your financial goals.
                </p>
            </div>
        </>
    )
}

export default SavingGoals