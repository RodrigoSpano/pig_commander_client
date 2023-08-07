import React from 'react'
import Image from 'next/image';
import Faq from '../../../utils/Images/Features Images/Faq.png';



const HelpSection = () => {
    return (
        <>

            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Help Section</h2>
                <p className='text-gray-600'>
                    Find answers to your questions and get support in our help and FAQ section. We are here to help you every step of the way.
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <Image src={Faq} alt='Record Expenses' width={400} height={400} />
            </div>
        </>
    )
}

export default HelpSection