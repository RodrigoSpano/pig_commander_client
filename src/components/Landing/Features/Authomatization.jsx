import React from 'react'
import Image from 'next/image';
import AutomationofMonthlyExpenses from '../../../utils/Images/Features Images/AutomationofMonthlyExpenses.png';

const Automation = () => {
    return (
        <>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Authomatization of Monthly Expenses</h2>
                <p className='text-gray-600 dark:text-lightGrey'>
                    Say goodbye to the repetitive task of entering your monthly expenses manually. Pig Commander allows you to automate the recording of recurring expenses, such as salary, rent, subscriptions and more, so you never miss a financial commitment.
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <Image src={AutomationofMonthlyExpenses} alt='Savings and Investment' width={400} height={400} />
            </div>
        </>
    )
}

export default Automation