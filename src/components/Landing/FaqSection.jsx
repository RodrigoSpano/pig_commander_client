import React from 'react';

const FaqSection = () => {
  return (
    <div className='py-8 md:py-16 flex flex-col items-center select-none'>

      <div className='pb-5 text-center'>
        <div className='text-boldPink font-semibold text-lg'>FAQ</div>
        <div className='text-center'>
          <h1 className='font-bold text-3xl md:text-5xl'>Frequently Asked</h1>
          <h1 className='font-bold text-3xl md:text-5xl'>Questions</h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center aling-center'>
        <div className='m-2'>
          <div className='p-6 rounded-lg h-64 w-[28.785rem] text-center bg-gradient-to-r from-regularPink to-boldPink'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-white'>How can I create an account?</h3>
            <p className='font-normal text-white'>To create an account, simply enter your name,</p>
            <p className='font-normal text-white'>email, and password in the registration form. Once</p>
            <p className='font-normal text-white'>you've created an account, you'll be able to log in</p>
            <p className='font-normal text-white'>and start using the app.</p>
          </div>
        </div>

        <div className='m-2'>
          <div className='p-6 rounded-lg h-64  w-[28.785rem] text-center bg-white'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>Are there limits on the transactions</h3>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>I can perform from my wallet?</h3>
            <p className='font-normal text-gray-500'>Yes, to ensure security and comply with</p>
            <p className='font-normal text-gray-500'>regulations, we set limits on daily transactions.</p>
            <p className='font-normal text-gray-500'> These limits may vary based on your</p>
            <p className='font-normal text-gray-500'>level of identity verification.</p>
          </div>
        </div>
      </div>
        
      <div className='flex flex-col md:flex-row justify-center aling-center'>

        <div className='m-2'>
          <div className='p-6 rounded-lg h-64  w-[28.785rem] text-center bg-white'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>Is it necessary to verify my </h3>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>identity to use Pig Commander?</h3>
            <p className='font-normal text-gray-500'> It is not necessary to verify your identity</p>
            <p className='font-normal text-gray-500'>to use pigCommander since we do not use</p>
            <p className='font-normal text-gray-500'>sensitive data.</p>
          </div>
        </div>


        <div className='m-2'>
          <div className='p-6 rounded-lg h-64  w-[28.785rem] text-center bg-gradient-to-r from-regularPink to-boldPink'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-white'>What security measures do </h3>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-white'>you have in place?</h3>
            <p className='font-normal text-white'>Our wallet uses high-level encryption to</p>
            <p className='font-normal text-white'>protect your personal and financial data.</p>
            <p className='font-normal text-white'>We also implement two-factor authentication (2FA)</p>
            <p className='font-normal text-white'>to ensure an additional layer of</p>
            <p className='font-normal text-white'>security on your transactions.</p>
          </div>
        </div>

      </div>

      <div className='flex flex-col md:flex-row justify-center aling-center'>
        <div className='m-2'>
          <div className='p-6 rounded-lg h-64  w-[28.785rem] text-center bg-gradient-to-r from-regularPink to-boldPink'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-white'>Are there any fees for using </h3>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-white'>the wallet?</h3>
            <p className='font-normal text-white'> The basic use of the wallet is free.</p>
            <p className='font-normal text-white'>However, you can access the Premium</p>
            <p className='font-normal text-white'> where you will find more features.</p>
          </div>
        </div>

        
        <div className='m-2'>
          <div className='p-6 rounded-lg h-64 w-[28.785rem] text-center bg-white'>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>Can I recover my account if </h3>
            <h3 className='pb-2 text-xl md:text-2xl font-bold text-black'>I forget my password?</h3>
            <p className='font-normal text-gray-500'>Yes, you can recover your account if you forget</p>
            <p className='font-normal text-gray-500'>your password. We provide recovery options, </p>
            <p className='font-normal text-gray-500'>such as resetting the password via your </p>
            <p className='font-normal text-gray-500'>verified email address or phone number.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqSection;
