import React from 'react';
import EmailModal from '../Information Modals/EmailModal';

function Email({ userData }) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col'>
        <div className='text-gray-700 text-lg font-semibold'>Email:</div>
        <div className='flex items-center'>
          <div className='mr-2'>{userData.email}</div>
          <EmailModal label='Email' />
        </div>
      </div>
    </div>
  );
}

export default Email;
