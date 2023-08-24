import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowUpRight } from "react-icons/hi2";
import ProfessionalSubscriptionImage from '../../../utils/Images/Features Images/ProfessionalSubscription.png';

const ProfessionalSubscription = () => {
    return (
        <>
            <div className='flex flex-col justify-center'>
                <h2 className='text-regularPink text-3xl font-bold mb-4'>Professional Subscription</h2>
                <p className='text-gray-600 dark:text-lightGrey'>
                    Explore the full potential of Pig Commander with our premium subscription. Get access to additional features and exclusive benefits to take your finances to the next level.
                </p>
                <Link href="/pricing">
                    <p className='flex items-center text-regularPink hover:text-boldPink'>
                        See more <span className='ml-1'> <HiArrowUpRight /> </span>
                    </p>
                </Link>
            </div>
            <div className='flex items-center justify-center'>
                <Image src={ProfessionalSubscriptionImage} alt='Savings and Investment' width={400} height={400} />
            </div>
        </>
    )
}

export default ProfessionalSubscription