"use client";
import React from "react";
import Link from "next/link";
import { HiOutlineCheck } from "react-icons/hi";
import { motion } from "framer-motion";

const ProfessionalCardEs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="rounded-md p-6 bg-gradient-to-r from-regularPink to-boldPink w-[90%] md:w-[350px] h-[480px] flex flex-col justify-between shadow-2xl select-none"
    >
      <div>
        <h3 className="pb-4 text-white text-2xl font-semibold">Profesional</h3>

        <div className="flex justify-start items-end pb-2">
          <h1 className="text-white text-6xl font-bold">$24.99</h1>
          <h4 className="text-white font-semibold">/ 6 meses</h4>
        </div>

        <div className="pb-4 leading-[1.5]">
          <p className="text-white">
            La manera perfecta de comenzar y familiarizarse
          </p>
          <p className="text-white">
            con nuestras herramientas de la manera ideal.
          </p>
        </div>

        <hr className="pb-4" />

        <ul className="pb-4">
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center pb-2 text-white"
          >
            <HiOutlineCheck className="mr-3 text-3xl text-white" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center pb-2 text-white"
          >
            <HiOutlineCheck className="mr-3 text-3xl text-white" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center pb-2 text-white"
          >
            <HiOutlineCheck className="mr-3 text-3xl text-white" />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </motion.li>
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center"
      >
        <Link href="/login">
          <button className="bg-white py-3 px-16 rounded-sm hover:bg-gray-100 focus:outline-none">
            Comenzar
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProfessionalCardEs;
