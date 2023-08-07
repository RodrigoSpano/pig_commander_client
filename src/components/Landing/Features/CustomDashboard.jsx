import React from 'react'
import Image from 'next/image';
import CustomDashboardImage from '../../../utils/Images/Features Images/CustomDashboard.png';

const CustomDashboard = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Image src={CustomDashboardImage} alt='Record Expenses' width={400} height={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Custom Dashboard</h2>
                <p className='text-gray-600'>
                    Access a personalized control panel that will give you a complete view of your finances at a single glance. Interactive graphs will provide you with a visual and understandable representation of your spending and saving habits.
                </p>
            </div>
        </>
    )
}

export default CustomDashboard