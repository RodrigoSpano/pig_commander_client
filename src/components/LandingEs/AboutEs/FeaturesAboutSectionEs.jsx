"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowUpRight } from "react-icons/hi2";
import ExpensesImage from '../../../utils/Images/Features Images/Expenses.png';
import SavesImage from '../../../utils/Images/Features Images/Saves.png';
import GreatImage from '../../../utils/Images/Features Images/Great.png';
import { motion } from 'framer-motion';

const imageHoverVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const SeccionCaracteristicasAcercaEs = () => {
  return (
    <div className='px-4 md:px-8'>
      <div className='flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start space-y-8 md:space-y-0 md:space-x-8'>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='flex flex-col justify-start items-center md:items-start max-w-md'
        >
          <h1 className='text-3xl font-bold mb-4 text-center md:text-left text-boldPink'>Gastos e Ingresos</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-700 text-sm md:text-base md:text-justify mb-4'
          >
            Con Pig Commander, llevar un control detallado de tus finanzas nunca ha sido tan sencillo. Podrás registrar todos tus gastos e ingresos de manera rápida y categorizarlos para obtener una visión clara de tus patrones financieros.
          </motion.p>
          <motion.div
            variants={imageHoverVariants}
            whileHover='hover'
            className='mt-4 md:mt-0 rounded-md'
          >
            <Image src={ExpensesImage} alt='Ejemplo' width={400} height={400} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='flex flex-col justify-start items-center md:items-start max-w-md'
        >
          <h1 className='text-3xl font-bold mb-4 text-center md:text-left text-boldPink'>Ahorros e Inversiones</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-700 text-sm md:text-base md:text-justify mb-4'
          >
            Pig Commander es la mejor aplicación para establecer metas de ahorro y rastrear tu progreso con el tiempo. También puedes visualizar tus inversiones y evaluar cómo están funcionando en tiempo real. ¡Con Pig Commander, estarás en camino hacia la libertad financiera en poco tiempo!
          </motion.p>
          <motion.div
            variants={imageHoverVariants}
            whileHover='hover'
            className='mt-4 md:mt-0 rounded-md'
          >
            <Image src={SavesImage} alt='Ejemplo' width={400} height={400} />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className='flex flex-col justify-start items-center md:items-start max-w-md'
        >
          <h1 className='text-3xl font-bold mb-4 text-center md:text-left text-boldPink'>Tablero Personalizado</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-700 text-sm md:text-base md:text-justify mb-4'
          >
            El panel de control personalizado de Pig Commander te brinda una vista completa de tus finanzas, incluidos tus hábitos de gasto y ahorro. Gráficos interactivos te muestran esta información de manera visual y comprensible, para que puedas tomar decisiones financieras informadas.
          </motion.p>
          <motion.div
            variants={imageHoverVariants}
            whileHover='hover'
            className='mt-4 md:mt-0 rounded-md'
          >
            <Image src={GreatImage} alt='Ejemplo' width={400} height={400} />
          </motion.div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className='flex justify-center my-4'
      >
        <Link href="/caracteristicas">
          <motion.h4
            whileHover={{ color: '#ff4a6e', scale: 1.05 }}
            className='flex items-center text-lg text-center md:text-left text-regularPink hover:text-boldPink'
          >
            Ver más Características
            <span className='ml-2'>
              <HiArrowUpRight />
            </span>
          </motion.h4>
        </Link>
      </motion.div>

    </div>
  );
};

export default SeccionCaracteristicasAcercaEs;
