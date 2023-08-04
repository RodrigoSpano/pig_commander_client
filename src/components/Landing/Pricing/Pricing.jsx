import React from 'react';
import NavBar from '../NavBar';
import BasicCard from './BasicCard';
import ProfessionalCard from './ProfessionalCard';
import Footer from '../Footer';

const Pricing = () => {
  return (
    <>
      <NavBar />
      <div className='flex flex-col items-center justify-center min-h-screen pt-4'>
        <div className='text-center mb-16 select-none'>
          <h1 className='font-bold text-3xl mb-4'>Convenient Pricing</h1>
          <div>
            <h3 className='text-lg'>Choose the right plan for you and get started controlling your capital.</h3>
          </div>
        </div>
        <div className='flex flex-col items-center md:flex-row space-y-8 md:space-y-0 md:space-x-8'>
          <BasicCard />
          <ProfessionalCard />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Pricing;
