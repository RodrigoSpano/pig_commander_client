"use client";
import React from "react";
import Image from "next/image";
import Mockup3 from "../../utils/Images/Mockups/Mockup3.png";
import { HiOutlineStar } from "react-icons/hi";
import { motion } from "framer-motion";

const FullyCustomizableSectionEs = () => {
  return (
    <div className="py-8 md:py-16 flex flex-wrap items-center justify-center md:justify-around select-none">
      {/* MOCKUP */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center mt-6 md:mt-0"
      >
        <Image src={Mockup3} width={600} height={600} alt="Logo" />
      </motion.div>

      {/* TEXTS */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col items-center md:items-start"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-row items-center"
        >
          <HiOutlineStar className="text-4xl text-boldPink mr-3" />
          <h1 className="font-bold text-3xl md:text-4xl">Completamente Customizable</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="pt-4"
        >
          <p className="text-gray-500 text-sm m-3 md:text-base dark:text-white">
          Tema Oscuro o Claro a Tu Manera
          </p>
          <p className="text-gray-500 text-sm m-3 md:text-base dark:text-white ">
          Descubre un Nuevo Idioma
          </p>
          <p className="text-gray-500 text-sm m-3 md:text-base dark:text-white">
            Customización
          </p>
          <p className="text-gray-500 text-sm m-3 md:text-base dark:text-white">
          Experiencia de Usuario Personalizada
          </p>
          <p className="text-gray-500 text-sm m-3 md:text-base dark:text-white">
          Adaptación a Tu Preferencia
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FullyCustomizableSectionEs;
