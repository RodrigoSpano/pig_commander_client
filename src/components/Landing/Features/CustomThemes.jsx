import React from 'react'
import Image from 'next/image';
import Dashboard from '../../../utils/Images/Features Images/Dashboard.png';


const CustomThemes = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Image src={Dashboard} alt='Record Expenses' width={400} height={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Custom Themes</h2>
                <p className='text-gray-600 dark:text-lightGrey'>
                    Personalize your Pig Commander experience by selecting custom themes with our subscription. Adapt the appearance of the application according to your style and preferences.
                </p>
            </div>
        </>
    )
}

export default CustomThemes