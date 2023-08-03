import React from 'react';
import Image from 'next/image';
import TestimonialsImage from '../../utils/Images/Testimonials2.png';

const TestimonialsSection = () => {
  return (
    // CONTENEDOR PADRE
    <div className='pb-16 flex flex-col items-center'>

      {/* TITLE */}
      <div className='my-8 text-center'>
        <div>
          <h2 className='text-boldPink font-semibold text-lg'>TESTIMONIAL</h2>
        </div>
        <div className=''>
          <h1 className='font-bold text-5xl'>What Our Users</h1>
          <h1 className='font-bold text-5xl'>Say About Us?</h1>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className='w-full flex justify-around items-center'>
        {/* MOCKUP */}
        <div className=''>
          <Image src={TestimonialsImage} width={500} height={500} alt="TestimonialsImage" />
        </div>

        {/* TEXTOS */}
        <div className=''>
          <h2 className='font-semibold text-3xl'>The Best Financial Accounting</h2>
          <h2 className='font-semibold text-3xl'>App Ever</h2>
          <p className='text-gray-500'>“I have been using this app for a few</p>
          <p className='text-gray-500'>months now and I am very impressed. It is</p>
          <p className='text-gray-500'>the best financial accounting app you ever</p>
          <p className='text-gray-500'>used. It's easy to use, packed with features,</p>
          <p className='text-gray-500'>and has helped me take control of my</p>
          <p className='text-gray-500'>finances in a way I never could before.”</p>
        </div>
      </div>

    </div>
  )
}

export default TestimonialsSection;
