import React from 'react';

const WelcomeCard = ({ user }) => {
  return (
    <div className='m-2 box-border'>
      <div className="break-all">
        <div className="font-semibold text-2xl xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">
          Welcome Back,
        </div>
        <div className="font-semibold text-2xl xl:text-4xl lg:text-4xl md:text-xl sm:text-lg">
          {user.name.replace(/^\w/, (c) => c.toUpperCase())}
        </div>
        <div className="text-gray-600 dark:text-white mt-2 xl:text-xl lg:text-base md:text-sm sm:text-xs">
          Pig Commander is the most secure finance app.
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;