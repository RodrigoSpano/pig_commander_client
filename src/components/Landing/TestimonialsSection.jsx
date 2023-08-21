import React from 'react';
import Image from 'next/image';
import TestimonialsImage from '../../utils/Images/Testimonials2.png';

const TestimonialsSection = () => {
  return (
    // CONTENEDOR PADRE
    <div className='py-16 flex flex-col items-center select-none'>

      {/* TITLE */}
      <div className='my-8 text-center'>
        <div>
          <h2 className='text-boldPink font-semibold text-lg'>TESTIMONIAL</h2>
        </div>
        <div className=''>
          <h1 className='font-bold text-4xl md:text-5xl'>What Our Users</h1>
          <h1 className='font-bold text-4xl md:text-5xl'>Say About Us?</h1>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className='w-full flex flex-col md:flex-row justify-around items-center'>
        {/* MOCKUP */}
        <div className='mb-8 md:mb-0'>
          <Image src={TestimonialsImage} width={500} height={500} alt="TestimonialsImage" />
        </div>

        {/* TEXTOS */}
        <div className='text-center md:text-left'>
          <h2 className='font-semibold text-2xl md:text-3xl dark:text-mediumPinkDark'>The Best Financial Accounting</h2>
          <h2 className='font-semibold text-2xl md:text-3xl dark:text-mediumPinkDark'>App Ever</h2>
          <p className='text-gray-500 dark:text-white'>“I have been using this app for a few</p>
          <p className='text-gray-500 dark:text-white'>months now and I am very impressed. It is</p>
          <p className='text-gray-500 dark:text-white'>the best financial accounting app you ever</p>
          <p className='text-gray-500 dark:text-white'>used. It's easy to use, packed with features,</p>
          <p className='text-gray-500 dark:text-white'>and has helped me take control of my</p>
          <p className='text-gray-500 dark:text-white'>finances in a way I never could before.”</p>
        </div>
      </div>

    </div>
  )
}

export default TestimonialsSection;
