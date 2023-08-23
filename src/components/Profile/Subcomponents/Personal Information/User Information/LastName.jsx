import React from 'react';
import LastNameModal from '../Information Modals/LastNameModal';

function LastName({ userData }) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col'>
        <div className='text-gray-700 text-lg font-semibold'>Last Name:</div>
        <div className='flex items-center'>
          <div className='mr-2'>{userData.lastName}</div>
          <LastNameModal label='Last Name' />
        </div>
      </div>
    </div>
  );
}

export default LastName;
