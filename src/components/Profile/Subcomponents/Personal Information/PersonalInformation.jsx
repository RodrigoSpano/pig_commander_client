import React from 'react';
import FirstName from './User Information/FirstName';
import LastName from './User Information/LastName'
import Email from './User Information/Email';
import Password from './User Information/Password';
import CreatedAt from './User Information/CreatedAt'

const userData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  password: '********',
  createdAt: 'August 15, 2023',
};

function PersonalInformation() {
  return (
    <div className='bg-white w-full rounded-md shadow-md p-6'>
      <h1 className='text-xl lg:text-2xl font-bold text-regularPink mb-6'>
        Personal Information
      </h1>

      <div className='flex flex-col md:grid grid-cols-2 gap-6'>
        <FirstName userData={userData} />
        <LastName userData={userData} />
        <Email userData={userData} />
        <Password userData={userData}/>
        <CreatedAt userData={userData}/>
      </div>
    </div>
  );
}

export default PersonalInformation;
