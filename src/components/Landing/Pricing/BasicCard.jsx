import React from 'react';
import Link from 'next/link';
import { HiOutlineCheck } from 'react-icons/hi';

const BasicCard = () => {
  return (
    <div className='rounded-md p-6 border-solid border-black w-[90%] md:w-[350px] h-[480px] flex flex-col justify-between shadow-2xl select-none'>
      <div>
        
        <h3 className='pb-4 text-black text-2xl font-semibold'>Basic</h3>

        <div className='flex justify-start items-end pb-2'>
          <h1 className='text-black text-4xl font-bold'>$19</h1>
          <h4 className='text-black font-semibold'>/ month</h4>
        </div>

        <div className='pb-4 leading-[1.5]'>
          <p className='text-black'>Ideal for getting started with our tools.</p>
        </div>

        <hr className='pb-4' />

        <ul className='pb-4'>
          <li className='flex items-center pb-2 text-black'>
            <HiOutlineCheck className='mr-3 text-3xl text-black' />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </li>
          <li className='flex items-center pb-2 text-black'>
            <HiOutlineCheck className='mr-3 text-3xl text-black' />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </li>
          <li className='flex items-center pb-2 text-black'>
            <HiOutlineCheck className='mr-3 text-3xl text-black' />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </li>
        </ul>
      </div>

      <div className='flex items-center justify-center'>
        <Link href='/login'>
          <button className='bg-black text-white py-3 px-16 rounded-sm hover:bg-zinc-900 focus:outline-none'>
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BasicCard;
