import React from 'react';
import Image from 'next/image';
import userimageexample from '../../../utils/Images/userimageexample.png';

function ProfileImage() {
  return (
    <div className='bg-white h-full rounded-md shadow-md p-6 items-center justify-center'>
      <h1 className='text-xl lg:text-2xl font-bold text-regularPink mb-6'>
        Image
      </h1>
        <div className='flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-56 md:h-56 lg:w-52 lg:h-52 xl:w-64 xl:h-64'>
          <Image src={userimageexample} width={300} height={300} layout="fixed" className='rounded-full'/>
        </div>
    </div>
  );
}

export default ProfileImage;
