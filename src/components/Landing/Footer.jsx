import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../utils/Images/image.png';
import { HiMail, HiPhone } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className='rounded-t-md shadow-black bg-white'>
      <div className='flex flex-col md:flex-row justify-around items-center md:px-12 py-8'>
        {/* CONTACT */}
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <Image src={Logo} width={50} height={60} alt='Logo' />
          <div className='flex flex-col md:flex-row md:items-center mt-2'>
            <div className='flex items-center'>
              <HiMail className='text-boldPink text-xl mr-1' />
              <p>email.com</p>
            </div>
            <div className='flex items-center mt-2 md:mt-0 md:ml-4'>
              <HiPhone className='text-boldPink text-xl mr-1' />
              <p>+123 456 789</p>
            </div>
          </div>
        </div>

        {/* LINKS */}
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <h3 className='pb-2 text-3xl font-bold'>Links</h3>
          <Link href='#' className='pb-1 text-base'>
            Home
          </Link>
          <Link href='#' className='pb-1 text-base'>
            About Us
          </Link>
          <Link href='#' className='pb-1 text-base'>
            Pricing
          </Link>
          <Link href='#' className='pb-1 text-base'>
            Features
          </Link>
        </div>

        {/* LEGAL */}
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <h3 className='pb-2 text-3xl font-bold'>Legal</h3>
          <Link href='#' className='pb-1 text-base'>
            Terms Of Use
          </Link>
          <Link href='#' className='pb-1 text-base'>
            Privacy Policy
          </Link>
          <Link href='#' className='pb-1 text-base'>
            Cookie Policy
          </Link>
        </div>

        {/* PRODUCT */}
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <h3 className='pb-2 text-3xl font-bold'>Product</h3>
          <Link href='#' className='pb-1 text-base'>
            Take Tour
          </Link>
          <Link href='#' className='pb-1 text-base'>
            Live Chat
          </Link>
          <Link href='#' className='pb-1 text-base'>
            Reviews
          </Link>
        </div>

        {/* NEWSLETTER */}
        <div className='flex flex-col items-center md:items-start mb-4 md:mb-0'>
          <h3 className='pb-2 text-3xl font-bold'>Newsletter</h3>
          <Link href='#' className='pb-1 text-base'>
            Stay Up to Date
          </Link>
        </div>
      </div>

      <hr className='my-6 md:my-8'></hr>

      <div className='text-center md:text-center px-6 py-6 md:px-12'>
        Copyright 2023 PigCommander.Com all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
