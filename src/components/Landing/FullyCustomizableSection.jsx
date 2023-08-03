import React from 'react';
import Image from 'next/image';
import MockUp from '../../utils/Images/iPhone_14_Blue_PDP_Image_Position-1A_LAES.png';


const FeaturesSection = () => {
  return (
    <div className='pb-16 flex flex-wrap grow justify-around aling-center'>
      {/* MOCKUP */}
      <div className='flex items-center'>
        <Image src={MockUp} width={260} height={505} alt="Logo" />
      </div>

      {/* TEXTS */}
      <div className='flex flex-col justify-center'>
        <h1 className='font-bold text-5xl'>Fully Customizable</h1>

        <div className='pt-4'>
          <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

        </div>

      </div>
    </div>
  )
}

export default FeaturesSection;
