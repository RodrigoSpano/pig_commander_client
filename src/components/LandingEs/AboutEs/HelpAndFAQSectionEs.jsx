'use client'
import React from 'react';
import Image from 'next/image';
import Faq from '../../../utils/Images/Features Images/Faq.png';
import News from '../../../utils/Images/Features Images/News.png';
import MissionImage from '../../../utils/Images/Features Images/Mission.png';
import { motion } from 'framer-motion';

const imageHoverVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const SeccionAyudaYPreguntasFrecuentesEs = () => {
  return (
    <div className='px-4 md:px-8 py-8 md:py-16 bg-neutral-100 rounded-t-md'>
      <div className='container mx-auto'>
        <motion.div className='grid md:grid-cols-2 gap-8 items-center' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className='text-center md:text-left'>
            <h1 className='text-5xl font-bold mb-4'>Sección de Ayuda y Preguntas Frecuentes</h1>
            <p className='text-gray-700 text-base'>
              Si tienes alguna pregunta o necesitas asistencia, nuestra Sección de Ayuda y Preguntas Frecuentes está aquí para ayudarte. Encuentra respuestas a las preguntas más comunes y aprende cómo sacar el máximo provecho de todas las funciones de Pig Commander.
            </p>
          </div>
          <div className='flex justify-center'>
            <motion.div
              variants={imageHoverVariants}
              whileHover='hover'
              className='mt-4 md:mt-0 rounded-md'
            >
              <Image src={Faq} alt='Ejemplo' className='mt-8 rounded-md' width={400} height={400} />
            </motion.div>

          </div>
        </motion.div>

        <motion.div className='grid md:grid-cols-2 gap-8 items-center mt-16' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className='text-center md:text-left'>
            <h1 className='text-5xl font-bold mb-4'>Noticias Financieras</h1>
            <p className='text-gray-700 text-base'>
              Mantente informado sobre las últimas noticias del mundo financiero con nuestra sección de noticias. Mantenemos esta sección actualizada para que estés al tanto de eventos relevantes que puedan afectar tus decisiones financieras.
            </p>
          </div>
          <div className='flex justify-center'>
            <motion.div
              variants={imageHoverVariants}
              whileHover='hover'
              className='mt-4 md:mt-0 rounded-md'
            >
              <Image src={News} alt='Ejemplo' className='mt-8 rounded-md' width={400} height={400} />
            </motion.div>

          </div>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8 items-center mt-16'>
          <div className='text-center md:text-left'>
            <h1 className='text-5xl font-bold mb-4'>Nuestra Misión</h1>
            <p className='text-gray-700 text-base'>
              En Pig Commander, nuestra misión es proporcionarte una herramienta potente y fácil de usar para tomar el control de tus finanzas y acercarte cada vez más a tus objetivos financieros. ¡Únete a nuestra comunidad y comienza a tomar decisiones financieras inteligentes hoy mismo!
            </p>
          </div>
          <div className='flex justify-center'>
            <motion.div
              variants={imageHoverVariants}
              whileHover='hover'
              className='mt-4 md:mt-0 rounded-md'
            >
              <Image src={MissionImage} alt='Ejemplo' className='mt-8 rounded-md' width={400} height={400} />
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SeccionAyudaYPreguntasFrecuentesEs;
