import React from 'react';
import FirstNameModalEs from '../Information Modals/FirstNameModal';

function FirstNameEs({ user }) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col'>
        <div className='text-gray-700 dark:text-white text-lg font-semibold'>Nombre:</div>
        <div className='flex items-center'>
          <div className='mr-2'>{user.name}</div>
          <FirstNameModalEs label='Nombre' />
        </div>
      </div>
    </div>
  );
}

export default FirstNameEs;
