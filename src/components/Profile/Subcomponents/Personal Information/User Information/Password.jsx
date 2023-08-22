import React from 'react';
import PasswordModal from '../Information Modals/PasswordModal';

function Password({ userData }) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col'>
        <div className='text-gray-700 text-lg font-semibold'>Password:</div>
        <div className='flex items-center'>
          <div className='mr-2'>{userData.password}</div>
          <PasswordModal label='Password' />
        </div>
      </div>
    </div>
  );
}

export default Password;
