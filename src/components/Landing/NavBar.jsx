"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../utils/Images/image.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className='hidden md:flex justify-around pt-2'>
        {/* LOGO */}
        <div className=''>
          <Image src={Logo} width={50} height={60} alt='Logo' />
        </div>

        {/* REDIRECCIONES */}
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <p className='mr-10 hover:font-semibold hover:text-regularPink cursor-pointer'>
              Home
            </p>
          </Link>

          <Link href='/about'>
            <p className='mr-10 hover:font-semibold hover:text-regularPink cursor-pointer'>
              About Us
            </p>
          </Link>

          <Link href='/pricing'>
            <p className='mr-10 hover:font-semibold hover:text-regularPink cursor-pointer'>
              Pricing
            </p>
          </Link>

          <Link href='/features'>
            <p className='hover:font-semibold hover:text-regularPink cursor-pointer'>
              Features
            </p>
          </Link>
        </div>

        {/* BOTONES */}
        <div className='flex justify-center items-center'>
          <Link href='/login'>
            <button className='text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-8 py-3 mx-2'>
              Log In
            </button>
          </Link>

          <Link href='/signup'>
            <button className='text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-8 py-3'>
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile and Tablet Navbar */}
      <nav className='md:hidden'>
        <div className='flex justify-between items-center pt-2 px-4'>
          {/* LOGO */}
          <div>
            <Image src={Logo} width={50} height={60} alt='Logo' />
          </div>

          {/* Hamburguer Menu Icon */}
          <div className='block md:hidden' onClick={toggleMenu}>
            <svg
              className='w-6 h-6 cursor-pointer'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </div>
        </div>

        {/* Mobile and Tablet Dropdown Menu */}
        {isOpen && (
          <div className='px-4 py-2 bg-white'>
            <Link href='/'>
              <p className='mb-2 text-sm hover:font-semibold hover:text-regularPink cursor-pointer'>
                Home
              </p>
            </Link>

            <Link href='/About'>
              <p className='mb-2 text-sm hover:font-semibold hover:text-regularPink cursor-pointer'>
                About Us
              </p>
            </Link>

            <Link href='/Pricing'>
              <p className='mb-2 text-sm hover:font-semibold hover:text-regularPink cursor-pointer'>
                Pricing
              </p>
            </Link>

            <Link href='/Features'>
              <p className='mb-2 text-sm hover:font-semibold hover:text-regularPink cursor-pointer'>
                Features
              </p>
            </Link>

            <div className='flex justify-center'>
              <Link href='/login'>
                <button className='text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-8 py-3 mx-2'>
                  Log In
                </button>
              </Link>

              <Link href='/signup'>
                <button className='text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-8 py-3'>
                  Register
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
