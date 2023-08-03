import React from 'react';
import Image from 'next/image';
import MockUp from '../../utils/Images/iPhone_14_Blue_PDP_Image_Position-1A_LAES.png';
import { HiFire } from 'react-icons/hi'

const AdventagesSection = () => {
  return (
    <div className='pb-16 flex flex-wrap grow justify-around'>
      {/* TEXTS */}
      <div className='flex flex-col justify-center'>
        <h2 className='text-boldPink font-semibold text-lg'>ADVENTAGES</h2>
        <h1 className='font-bold text-5xl'>Why Choose Pig</h1>
        <h1 className='font-bold text-5xl'>Commander?</h1>

        <div className='pt-4'>
          <span className='flex items-center'>
            <HiFire className='text-boldPink text-2xl '/>
            <h3 className='font-semibold text-lg'>It's easy to use:</h3>
          </span>
          <p className='text-gray-500'>The app should be easy to use and navigate,</p>
          <p className='text-gray-500'>even for people unfamiliar with personal finance.</p>
        </div>

        <div className='pt-4'>
          <span className='flex items-center'>
            <HiFire className='text-boldPink text-2xl '/>
            <h3 className='font-semibold text-lg'>It is customizable:</h3>
          </span>
          <p className='text-gray-500'>The application must allow users to</p>
          <p className='text-gray-500'>personalize their experience to suit their individual needs</p>
          <p className='text-gray-500'>and goals.</p>
        </div>

        <div className='pt-4'>
          <span className='flex items-center'>
            <HiFire className='text-boldPink text-2xl '/>
            <h3 className='font-semibold text-lg'>It is educational:</h3>
          </span>
          <p className='text-gray-500'> The app should provide users with personal</p>
          <p className='text-gray-500'> finance information so they can learn and improve their</p>
          <p className='text-gray-500'> financial skills.</p>
        </div>

      </div>

      {/* MOCKUP */}
      <div className='flex items-center'>
        <Image src={MockUp} width={260} height={505} alt="Logo" />
      </div>

    </div>
  )
}

export default AdventagesSection;
