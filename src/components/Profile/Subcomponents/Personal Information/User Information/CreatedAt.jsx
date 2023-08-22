import React from 'react';

function CreatedAt({ userData }) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col'>
        <div className='text-gray-700 text-lg font-semibold'>Created At:</div>
        <div className='flex items-center'>
          <div className='mr-2'>{userData.createdAt}</div>
        </div>
      </div>
    </div>
  );
}

export default CreatedAt;
