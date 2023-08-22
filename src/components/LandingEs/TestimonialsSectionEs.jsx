import React from 'react';
import Image from 'next/image';
import TestimonialsImage from '../../utils/Images/Testimonials2.png';

const TestimonialsSectionEs = () => {
  return (
    // CONTENEDOR PADRE
    <div className='py-16 flex flex-col items-center select-none'>

      {/* TITLE */}
      <div className='my-8 text-center'>
        <div>
          <h2 className='text-boldPink font-semibold text-lg'>TESTIMONIOS</h2>
        </div>
        <div className=''>
          <h1 className='font-bold text-4xl md:text-5xl'>Qué Dicen Nuestros </h1>
          <h1 className='font-bold text-4xl md:text-5xl'>Usuarios de Nosotros?</h1>
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
          <h2 className='font-semibold text-2xl md:text-3xl dark:text-mediumPinkDark'>La Mejor App de Contabilidad Financiera</h2>
          <h2 className='font-semibold text-2xl md:text-3xl dark:text-mediumPinkDark'>de Todas</h2>
          <p className='text-gray-500 dark:text-white'>"He estado usando esta aplicación durante unos</p>
          <p className='text-gray-500 dark:text-white'>meses y estoy muy impresionado. Es</p>
          <p className='text-gray-500 dark:text-white'>la mejor aplicación de contabilidad financiera</p>
          <p className='text-gray-500 dark:text-white'>que jamás hayas usado. Es fácil de usar, repleta de funciones,</p>
          <p className='text-gray-500 dark:text-white'>y me ha ayudado a tomar el control de mis</p>
          <p className='text-gray-500 dark:text-white'>finanzas de una manera que nunca pude antes."</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSectionEs;
