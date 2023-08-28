import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../utils/Images/image.png";
import { HiMail, HiPhone } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="rounded-t-md shadow-black bg-white dark:bg-mediumGrayDarkMode select-none">
      <div className="flex flex-col xl:items-start lg:items-start md:flex-row justify-around items-center md:px-12 py-8">
        {/* CONTACT */}
        <div className="flex flex-col items-center  mb-4 md:mb-0">
          <Image src={Logo} width={50} height={60} alt="Logo" />
          <div className="flex flex-col items-baseline mt-2">
            <div className="flex items-center mb-1">
              <HiMail className="text-boldPink text-xl mr-1" />
              <p>pigcommandersp@gmail.com</p>
            </div>
            <div className="flex items-center mt-2 md:mt-0 md:ml-4">
              <HiPhone className="text-boldPink text-xl mr-1" />
              <p>+123 456 789</p>
            </div>
          </div>
        </div>

        {/* LINKS */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h3 className="pb-2 text-3xl font-bold dark:text-mediumPinkDark">
            Links
          </h3>
          <Link href="/" className="pb-1 text-base">
            Home
          </Link>
          <Link href="/reviews" className="pb-1 text-base">
            Reviews
          </Link>
          <Link href="/about" className="pb-1 text-base">
            About Us
          </Link>
          <Link href="/pricing" className="pb-1 text-base">
            Pricing
          </Link>
          <Link href="/features" className="pb-1 text-base">
            Features
          </Link>
        </div>

        {/* LEGAL */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h3 className="pb-2 text-3xl font-bold dark:text-mediumPinkDark">
            Legal
          </h3>
          <Link href="#" className="pb-1 text-base">
            Terms Of Use
          </Link>
          <Link href="#" className="pb-1 text-base">
            Privacy Policy
          </Link>
          <Link href="#" className="pb-1 text-base">
            Cookie Policy
          </Link>
        </div>

        {/* PRODUCT */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h3 className="pb-2 text-3xl font-bold dark:text-mediumPinkDark">
            CEO´s
          </h3>
          <div className="flex">
            <a
              href="https://github.com/MatiasCancina"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/matiascancina/"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base mx-2"
            >
              <BsLinkedin />
            </a>
            Matías Cancina
          </div>
          <div className="flex">
            <a
              href="https://github.com/RodrigoSpano"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rodrigospano/"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base mx-2"
            >
              <BsLinkedin />
            </a>
            Rodrigo Spano
          </div>
          <div className="flex">
            <a
              href="https://github.com/Vickyrdz"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/victoriabelenrodriguez/"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base mx-2"
            >
              <BsLinkedin />
            </a>
            Victoria Rodriguez
          </div>
          <div className="flex">
            <a
              href="https://github.com/LihuelZerega"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lihuelzerega/"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base mx-2"
            >
              <BsLinkedin />
            </a>
            Lihuel Zerega
          </div>
          <div className="flex">
            <a
              href="https://github.com/lucasgrav"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/lucasgastoncorrea/"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base mx-2"
            >
              <BsLinkedin />
            </a>
            Lucas Correa
          </div>
          <div className="flex">
            <a
              href="https://github.com/daviddcordoba"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/david-cordoba25/"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base mx-2"
            >
              <BsLinkedin />
            </a>
            David Córdoba
          </div>
          <div className="flex">
            <a
              href="https://github.com/laurenciopaez"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/laurencio-paez-727042155/"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base mx-2"
            >
              <BsLinkedin />
            </a>
            Laurencio Paez
          </div>
          <div className="flex">
            <a
              href="https://github.com/benjapadilla1"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/benja-padilla/"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 text-base mx-2"
            >
              <BsLinkedin />
            </a>
            Benjamín Padilla
          </div>
        </div>
      </div>

      <hr className="my-6 md:my-8"></hr>

      <div className="text-center md:text-center px-6 py-6 md:px-12">
        Copyright 2023 | PigCommander.com | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
