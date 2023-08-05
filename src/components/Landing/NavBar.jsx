"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../utils/Images/image.png';
import {
      HiOutlineHome,
      HiOutlineFire,
      HiOutlineCurrencyDollar,
      HiOutlineExclamationCircle,
      HiOutlineUserAdd,
      HiOutlineUser
} from "react-icons/hi";
import {motion} from 'framer-motion'

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
            <motion.p whileHover={{scale: 1.1}} whileTap={{scale: [0.9,1.1,1]}} className='mr-10 font-semibold hover:text-regularPink cursor-pointer'>
              Home
            </motion.p>
          </Link>

          <Link href='/about'>
            <motion.p whileHover={{scale: 1.1}} whileTap={{scale: [0.9,1.1,1]}} className='mr-10 font-semibold hover:text-regularPink cursor-pointer'>
              About Us
            </motion.p>
          </Link>

          <Link href='/pricing'>
            <motion.p whileHover={{scale: 1.1}} whileTap={{scale: [0.9,1.1,1]}} className='mr-10 font-semibold hover:text-regularPink cursor-pointer'>
              Pricing
            </motion.p>
          </Link>

          <Link href='/features'>
            <motion.p whileHover={{scale: 1.1}} whileTap={{scale: [0.9,1.1,1]}} className='font-semibold hover:text-regularPink cursor-pointer'>
              Features
            </motion.p>
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
            {isOpen ? (
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
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
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
            )}
          </div>
        </div>

        {/* Mobile and Tablet Dropdown Menu */}
        {isOpen && (
          <div className='px-4 py-2 bg-white'>
            <Link href='/'>
              <div className='flex justify-start items-center'>
                <HiOutlineHome className='mr-1 text-regularPink text-xl' />
                <p className='my-2 text-md'>
                  Home
                </p>
              </div>
            </Link>

            <hr />

            <Link href='/about'>
              <div className='flex justify-start items-center'>
                <HiOutlineExclamationCircle className='mr-1 text-regularPink text-xl' />
                <p className='my-2 text-md'>
                  About Us
                </p>
              </div>
            </Link>

            <hr />

            <Link href='/pricing'>
              <div className='flex justify-start items-center'>
                <HiOutlineCurrencyDollar className='mr-1 text-regularPink text-xl' />
                <p className='my-2 text-md'>
                  Pricing
                </p>
              </div>
            </Link>

            <hr />

            <Link href='/features'>
              <div className='flex justify-start items-center'>
                <HiOutlineFire className='mr-1 text-regularPink text-xl' />
                <p className='my-2 text-md'>
                  Features
                </p>
              </div>
            </Link>

            <hr />

            <Link href='/login'>
              <div className='flex justify-start items-center'>
                <HiOutlineUser className='mr-1 text-regularPink text-xl' />
                <p className='my-2 text-md'>
                  Log In
                </p>
              </div>
            </Link>

            <hr />

            <Link href='/signup'>
              <div className='flex justify-start items-center'>
                <HiOutlineUserAdd className='mr-1 text-regularPink text-xl' />
                <p className='my-2 text-md'>
                  Register
                </p>
              </div>
            </Link>

          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
