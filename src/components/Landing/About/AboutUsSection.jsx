import React from 'react';
import Image from 'next/image';
import exampleImage from '../../../utils/Images/example.png';

const AboutUsSection = () => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-8 select-none pb-12'>
      <div className='text-center md:text-left max-w-md'>
        <h1 className='text-3xl font-bold mb-4'>About Pig Commander</h1>

        <div className='text-gray-700'>
          <p className='mb-2'>
            Pig Commander is an innovative financial application designed to simplify the management of your financial
            resources.
          </p>

          <p className='mb-2'>
            With our platform, you will be able to record your expenses and income in a simple and efficient way, as well
            as carry out detailed monitoring of your savings and investments.
          </p>

          <p className='mb-2'>With Pig Commander, making smart financial decisions will be easier than ever.</p>
        </div>
      </div>

      <div className='flex items-center justify-center md:justify-start rounded-md overflow-hidden shadow-md max-w-xs md:max-w-none'>
        <Image src={exampleImage} width={300} height={300} alt='exampleImage' />
      </div>
    </div>
  );
};

export default AboutUsSection;
