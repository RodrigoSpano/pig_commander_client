import React from 'react'
import Image from 'next/image';
import News from '../../../utils/Images/Features Images/News.png';

const FinalcialNews = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <Image src={News} alt='Savings and Investment' width={400} height={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Financial News</h2>
                <p className='text-gray-600'>
                    Stay on top of the latest financial news and trends that may affect your financial decisions. Our news section will keep you informed so you can make smart financial decisions.
                </p>
            </div>
        </>
    )
}

export default FinalcialNews