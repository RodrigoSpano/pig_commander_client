import React from 'react';
import FirstNameModal from '../Information Modals/FirstNameModal';

function FirstName({ userData }) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col'>
        <div className='text-gray-700 text-lg font-semibold'>First Name:</div>
        <div className='flex items-center'>
          <div className='mr-2'>{userData.firstName}</div>
          <FirstNameModal label='First Name' />
        </div>
      </div>
    </div>
  );
}

export default FirstName;
