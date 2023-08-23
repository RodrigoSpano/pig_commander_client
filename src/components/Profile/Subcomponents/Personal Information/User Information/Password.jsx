import React from 'react';
import PasswordModal from '../Information Modals/PasswordModal';

function Password({ user }) {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col'>
        <div className='text-gray-700 text-lg dark:text-white font-semibold'>Password:</div>
        <div className='flex items-center'>
          <div className='mr-2'>{user.password}</div>
          <PasswordModal label='Password' />
        </div>
      </div>
    </div>
  );
}

export default Password;
