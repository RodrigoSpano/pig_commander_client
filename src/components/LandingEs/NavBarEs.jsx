"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../utils/Images/image.png";
import {
  HiOutlineHome,
  HiOutlineFire,
  HiOutlineCurrencyDollar,
  HiOutlineExclamationCircle,
  HiOutlineUserAdd,
  HiOutlineUser,
} from "react-icons/hi";
import SpanishButton from "../../utils/Images/EsButton.png";
import EnglishButton from "../../utils/Images/EnButton.png";
import ThemeSwitchLanding from "../Landing/Buttons/ThemeSwitchLanding"
import { motion, AnimatePresence } from "framer-motion";
import { setLanguage } from "@/redux/features/languageSlice";
import { useDispatch, useSelector } from "react-redux";

const NavBarEs = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language);

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language === 'en' ? 'es' : 'en'));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    {
      icon: <HiOutlineHome className="mr-1 text-regularPink text-xl" />,
      text: "Home",
      path: "/",
    },
    {
      icon: (
        <HiOutlineExclamationCircle className="mr-1 text-regularPink text-xl" />
      ),
      text: "About Us",
      path: "/about",
    },
    {
      icon: (
        <HiOutlineCurrencyDollar className="mr-1 text-regularPink text-xl" />
      ),
      text: "Pricing",
      path: "/pricing",
    },
    {
      icon: <HiOutlineFire className="mr-1 text-regularPink text-xl" />,
      text: "Features",
      path: "/features",
    },
    {
      icon: <HiOutlineUser className="mr-1 text-regularPink text-xl" />,
      text: "Log In",
      path: "/login",
    },
    {
      icon: <HiOutlineUserAdd className="mr-1 text-regularPink text-xl" />,
      text: "Register",
      path: "/signup",
    },
  ];

  return (
    <>
      {/* DESKTOP */}
      <nav className="hidden md:flex justify-around pt-2">
        {/* LOGO */}
        <div className="">
          <Image src={Logo} width={50} height={60} alt="Logo" />
        </div>

        {/* REDIRECCIONES */}
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: [0.9, 1.1, 1] }}
              className="mr-10 font-semibold hover:text-regularPink cursor-pointer"
            >
              Inicio
            </motion.p>
          </Link>

          <Link href="/about">
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: [0.9, 1.1, 1] }}
              className="mr-10 font-semibold hover:text-regularPink cursor-pointer"
            >
              Sobre nosotros
            </motion.p>
          </Link>

          <Link href="/pricing">
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: [0.9, 1.1, 1] }}
              className="mr-10 font-semibold hover:text-regularPink cursor-pointer"
            >
              Precios
            </motion.p>
          </Link>

          <Link href="/reviews">
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: [0.9, 1.1, 1] }}
              className="mr-10 font-semibold hover:text-regularPink cursor-pointer"
            >
              Reseñas
            </motion.p>
          </Link>

          <Link href="/features">
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: [0.9, 1.1, 1] }}
              className="font-semibold hover:text-regularPink cursor-pointer"
            >
              Funcionalidades
            </motion.p>
          </Link>
        </div>

        {/* BOTONES */}
        <section className="flex justify-center items-center">
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-8 py-3 mx-2"
            >
              Iniciar Sesión
            </motion.button>
          </Link>

          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-2xl px-8 py-3"
            >
              Registrarse
            </motion.button>
          </Link>
        </section>

        {/* LANGUAGESWITCH */}
        <section className="flex flex-row items-center justify-center space-x-2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white p-2 rounded-full shadow-md"
              onClick={() => handleLanguageChange(currentLanguage)}
            >
              {currentLanguage === 'es' ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  src={SpanishButton}
                >
                  <Image src={EnglishButton} width={18} />

                </motion.div>

              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Image src={SpanishButton} width={18} />
                </motion.div>
              )}
            </motion.button>
          </motion.div>

          <ThemeSwitchLanding />
        </section>


      </nav>

      {/* MOBILE */}
      <nav className="md:hidden bg-white dark:bg-mediumGrayDarkMode">
        <div className="flex justify-between items-center py-2 px-4">
          {/* LOGO */}
          <div>
            <Image src={Logo} width={50} height={60} alt="Logo" />
          </div>

          {/* HAMBURGUER */}
          <div className="block md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Mobile and Tablet Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu-dropdown"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="px-4 py-2 bg-white dark:bg-mediumGrayDarkMode"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link href={item.path}>
                    <div className="flex justify-start items-center">
                      {item.icon}
                      <p className="my-2 text-md">{item.text}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavBarEs;
