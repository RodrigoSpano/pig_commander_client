import React from 'react';

function Email({ user }) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col'>
        <div className='text-gray-700 dark:text-white text-lg font-semibold'>Email:</div>
        <div className='flex items-center'>
          <div className='mr-2'>{user.email}</div>
        </div>
      </div>
    </div>
  );
}

export default Email;
