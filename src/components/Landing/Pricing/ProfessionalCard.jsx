import React from 'react';
import Link from 'next/link';
import { HiOutlineCheck } from 'react-icons/hi';

const ProfessionalCard = () => {
  return (
    <div className='rounded-md p-6 bg-gradient-to-r from-regularPink to-boldPink w-[90%] md:w-[350px] h-[480px] flex flex-col justify-between shadow-2xl select-none'>
      <div>
        <h3 className='pb-4 text-white text-2xl font-semibold'>Professional</h3>

        <div className='flex justify-start items-end pb-2'>
          <h1 className='text-white text-6xl font-bold'>$49</h1>
          <h4 className='text-white font-semibold'>/ month</h4>
        </div>

        <div className='pb-4 leading-[1.5]'>
          <p className='text-white'>The perfect way to get started and get</p>
          <p className='text-white'>used to our tools.</p>
        </div>

        <hr className='pb-4' />

        <ul className='pb-4'>
          <li className='flex items-center pb-2 text-white'>
            <HiOutlineCheck className='mr-3 text-3xl text-white' />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </li>
          <li className='flex items-center pb-2 text-white'>
            <HiOutlineCheck className='mr-3 text-3xl text-white' />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </li>
          <li className='flex items-center pb-2 text-white'>
            <HiOutlineCheck className='mr-3 text-3xl text-white' />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </li>
        </ul>
      </div>

      <div className='flex items-center justify-center'>
        <Link href='/login'>
          <button className='bg-white py-3 px-16 rounded-sm hover:bg-gray-100 focus:outline-none'>
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfessionalCard;
