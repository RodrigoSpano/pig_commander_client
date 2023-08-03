import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../utils/Images/image.png';
import { HiMail, HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className='rounded-t-md shadow-black'>
      <div className='flex justify-around aling-center'>
        {/* CONTACT */}
        <div className='flex-col'>
          <Image src={Logo} width={50} height={60} alt="Logo" />
          <div className='flex-col'>
            <div className='flex'>
              <HiMail className='text-boldPink text-xl mr-1' />
              <p>email.com</p>
            </div>
            <div className='flex'>
              <HiPhone className='text-boldPink text-xl mr-1' />
              <p>+123 456 789</p>
            </div>
          </div>
        </div>

        {/* LINKS */}
        <div className='flex flex-col'>
          <h3 className='pb-2 text-3xl font-bold'>Links</h3>
            <Link href="#" className='pb-1 text-base'>Home</Link>
            <Link href="#" className='pb-1 text-base'>About Us</Link>
            <Link href="#" className='pb-1 text-base'>Pricing</Link>
            <Link href="#" className='pb-1 text-base'>Features</Link>
        </div>

        {/* LEGAL */}
        <div className='flex flex-col'>
          <h3 className='pb-2 text-3xl font-bold'>Legal</h3>
          <Link href="#" className='pb-1 text-base'>Terms Of Use</Link>
          <Link href="#" className='pb-1 text-base'>Privacy Policy</Link>
          <Link href="#" className='pb-1 text-base'>Cookie Policy</Link>
        </div>

        {/* PRODUCT */}
        <div className='flex flex-col'>
          <h3 className='pb-2 text-3xl font-bold'>Product</h3>
          <Link href="#" className='pb-1 text-base'>Take Tour</Link>
          <Link href="#" className='pb-1 text-base'>Live Chat</Link>
          <Link href="#" className='pb-1 text-base'>Reveiws</Link>
        </div>

        {/* NEWSLETTER */}
        <div className='flex flex-col'>
          <h3 className='pb-2 text-3xl font-bold'>Newsletter</h3>
          <Link href="#" className='pb-1 text-base'>Stay Up to Date</Link>
        </div>

      </div>

      <hr></hr>

      <div>
        Copyright 2023 PigCommander.Com all rights reserved
      </div>
    </footer>
  )
}

export default Footer