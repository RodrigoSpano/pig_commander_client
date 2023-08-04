import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import exampleImage from '../../../utils/Images/example.png';

const FeaturesAboutSection = () => {
  return (
    <div className='px-4 md:px-8'>
      <div className='flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start space-y-8 md:space-y-0 md:space-x-8'>

        <div className='flex flex-col justify-start items-center md:items-start max-w-md'>
          <h1 className='text-3xl font-bold mb-4 text-center md:text-left'>Expenses and Income</h1>
          <p className='text-gray-700 text-sm md:text-base md:text-justify mb-4'>
            With Pig Commander, keeping detailed control of your finances has never been so simple. You will be able to
            record all your expenses and income quickly and categorize them to obtain a clear vision of your financial
            patterns.
          </p>
          <Image src={exampleImage} alt='Example' className='mt-4 md:mt-0 rounded-md' width={400} height={400} />
        </div>

        <div className='flex flex-col justify-start items-center md:items-start max-w-md'>
          <h1 className='text-3xl font-bold mb-4 text-center md:text-left'>Savings and Investments</h1>
          <p className='text-gray-700 text-sm md:text-base md:text-justify mb-4'>
            Pig Commander is the best app for setting saving goals and tracking your progress over time.
            You can also visualize your investments and evaluate how they are working in real time.
            With Pig Commander, you'll be on your way to financial freedom in no time!
          </p>
          <Image src={exampleImage} alt='Example' className='mt-4 md:mt-0 rounded-md' width={400} height={400} />
        </div>

        <div className='flex flex-col justify-start items-center md:items-start max-w-md'>
          <h1 className='text-3xl font-bold mb-4 text-center md:text-left'>Custom Dashboard</h1>
          <p className='text-gray-700 text-sm md:text-base md:text-justify mb-4'>
            Pig Commander's personalized control panel gives you a complete view of your finances,
            including your spending and saving habits. Interactive graphs show you this information
            in a visual and easy-to-understand way, so you can make informed financial decisions.
          </p>
          <Image src={exampleImage} alt='Example' className='mt-4 md:mt-0 rounded-md' width={400} height={400} />
        </div>

      </div>

      <div className='flex justify-center my-4'>
        <Link href="/features">
          <h4 className='text-lg text-center md:text-left'>
            See more Features
          </h4>
        </Link>
      </div>

    </div>
  );
};

export default FeaturesAboutSection;
