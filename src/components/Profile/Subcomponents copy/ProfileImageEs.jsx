'use client'; 
import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

function ProfileImageEs() {

  const user = useSelector(state => state.user)

  return (
    <div className='bg-white dark:bg-mediumGrayDarkMode h-full rounded-md shadow-md p-6 items-center justify-center'>
      <h1 className='text-xl lg:text-2xl font-bold text-regularPink mb-6'>
        Imagen
      </h1>
        <div className='flex items-center justify-center rounded-full  w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-52 lg:h-52 xl:w-64 xl:h-64'>
          <Image src={user.image} width={300} height={300} layout="fixed" className=' object-cover xl:h-56 shadow-xl rounded-full '/>
        </div>
    </div>
  );
}

export default ProfileImageEs;
