import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../utils/Images/image.png';

const NavBar = () => {
  return (
    <>
      <nav className='flex justify-around pt-2'>
        {/* LOGO */}
        <div className=''>
          <Image src={Logo} width={50} height={60} alt="Logo" />
        </div>

        {/* REDIRECCIONES */}
        <div className='flex justify-between items-center'>

          <Link href="/">
            <p className='mr-10 hover:font-semibold hover:text-regularPink cursor-pointer'>
              Home
            </p>
          </Link>

          <Link href="/AboutUs">
            <p className='mr-10 hover:font-semibold hover:text-regularPink cursor-pointer'>
              About Us
            </p>
          </Link>

          <Link href="/Pricing">
            <p className='mr-10 hover:font-semibold hover:text-regularPink cursor-pointer'>
              Pricing
            </p>
          </Link>

          <Link href="/Features">
            <p className='hover:font-semibold hover:text-regularPink cursor-pointer'>
              Features
            </p>
          </Link>

        </div>

        {/* BOTONES */}
        <div className='flex justify-center items-center'>
          <button className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-8 py-4 mx-2" >
            Log In
          </button>
          <button className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-8 py-4" >
            Register
          </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
