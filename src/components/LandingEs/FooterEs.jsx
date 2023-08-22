import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../utils/Images/image.png';
import { HiMail, HiPhone } from 'react-icons/hi';

const FooterEs = () => {
  return (
    <footer className='rounded-t-md shadow-black bg-white dark:bg-mediumGrayDarkMode select-none'>
      <div className='flex flex-col xl:items-start lg:items-start md:flex-row justify-around items-center md:px-12 py-8'>
        {/* CONTACTO */}
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <Image src={Logo} width={50} height={60} alt='Logo' />
          <div className='flex flex-col md:flex-row md:items-center mt-2'>
            <div className='flex items-center'>
              <HiMail className='text-boldPink text-xl mr-1' />
              <p>correo@email.com</p>
            </div>
            <div className='flex items-center mt-2 md:mt-0 md:ml-4'>
              <HiPhone className='text-boldPink text-xl mr-1' />
              <p>+123 456 789</p>
            </div>
          </div>
        </div>

        {/* ENLACES */}
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <h3 className='pb-2 text-3xl font-bold dark:text-mediumPinkDark'>Enlaces</h3>
          <Link href='/' className='pb-1 text-base'>
            Inicio
          </Link>
          <Link href='/acerca' className='pb-1 text-base'>
            Sobre Nosotros
          </Link>
          <Link href='/precios' className='pb-1 text-base'>
            Precios
          </Link>
          <Link href='/funcionalidades' className='pb-1 text-base'>
            Funcionalidades
          </Link>
        </div>

        {/* LEGAL */}
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <h3 className='pb-2 text-3xl font-bold dark:text-mediumPinkDark'>Legal</h3>
          <Link href='#' className='pb-1 text-base'>
            Términos de Uso
          </Link>
          <Link href='#' className='pb-1 text-base'>
            Política de Privacidad
          </Link>
          <Link href='#' className='pb-1 text-base'>
            Política de Cookies
          </Link>
        </div>

        {/* PRODUCTO */}
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <h3 className='pb-2 text-3xl font-bold dark:text-mediumPinkDark'>Producto</h3>
          <Link href='#' className='pb-1 text-base'>
            Hacer un Recorrido
          </Link>
          <Link href='#' className='pb-1 text-base'>
            Chat en Vivo
          </Link>
          <Link href='#' className='pb-1 text-base'>
            Opiniones
          </Link>
        </div>

        {/* BOLETÍN */}
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <h3 className='pb-2 text-3xl font-bold dark:text-mediumPinkDark'>Boletín</h3>
          <Link href='#' className='pb-1 text-base'>
            Mantente Actualizado
          </Link>
        </div>
      </div>

      <hr className='my-6 md:my-8'></hr>

      <div className='text-center md:text-center px-6 py-6 md:px-12'>
        Derechos de autor 2023 PigCommander.Com todos los derechos reservados
      </div>
    </footer>
  );
};

export default FooterEs;
