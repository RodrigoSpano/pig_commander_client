import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className='text-center my-8 md:my-16 select-none'>
      <h1 className='font-bold text-3xl md:text-6xl mb-2'>Welcome to Pig Commander!</h1>
      <div>
        <h3 className='text-sm md:text-lg text-neutral-600'>
          Pig Commander is the most secure finance app.
        </h3>
      </div>
    </div>
  );
};

export default WelcomeMessage;
