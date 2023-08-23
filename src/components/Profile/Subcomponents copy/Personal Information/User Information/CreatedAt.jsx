import React from 'react';

function CreatedAt({ user}) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col'>
        <div className='text-gray-700 text-lg dark:text-white font-semibold'>Creada:</div>
        <div className='flex items-center'>
          <div className='mr-2'>{new Date(user.createdAt).toLocaleString()} hs</div>
        </div>
      </div>
    </div>
  );
}

export default CreatedAt;
