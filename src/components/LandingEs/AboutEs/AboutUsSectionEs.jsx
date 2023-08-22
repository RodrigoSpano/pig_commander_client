"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUsSectionEs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-8 select-none pb-12"
    >
      <motion.div
        variants={textVariants}
        className="max-w-6xl text-center md:text-center"
      >
        <motion.h1
          variants={textVariants}
          className="text-4xl font-bold mb-4 text-boldPink"
        >
          Sobre Pig Commander
        </motion.h1>

        <motion.div variants={textVariants} className="text-gray-700 space-y-4">
          <p>
            Simplifica la gestión de tus recursos financieros con Pig Commander,
            una innovadora aplicación financiera.
          </p>

          <p>
            Registra tus gastos e ingresos de manera eficiente y monitorea tus
            ahorros e inversiones con facilidad.
          </p>

          <p>
            Pig Commander hace que tomar decisiones financieras inteligentes sea
            más fácil que nunca.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUsSectionEs;
