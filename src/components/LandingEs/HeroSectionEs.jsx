"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroMockup from "../../utils/Images/Mockups/HeroMockup.png";

export default function HeroSectionEs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.9 } },
  };

  return (
    <div>
      <div className="px-6 lg:px-8 select-none">
        <div className="mx-auto max-w-7xl py-16 sm:py-16 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-left max-w-xl"
            >
              <motion.h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
                <span className="text-boldPink">Haz</span>
                <span className="dark:text-white"> las mejores</span>
                <span className="text-boldPink"> decisiones</span>
                <span className="dark:text-white"> financieras</span>
              </motion.h1>
              <motion.p className="mt-6 text-lg text-gray-600 dark:text-white">
              Con Pig Commander, puedes llevar un registro de tus ingresos, gastos y saldos, crear presupuestos, vincular tus cuentas bancarias y tarjetas de crédito, y establecer objetivos financieros.
              </motion.p>
              <motion.div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/login"
                  className="rounded-md bg-gradient-to-r from-regularPink to-boldPink px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-hidden="true"
                  >
                    Empezar <span>&rarr;</span>
                  </motion.span>
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-hidden="true"
                  >
                    Leer más <span>→</span>
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="hidden xl:block mt-8 xl:mt-0 ml-12"
            >
              <Image src={HeroMockup} width={900} height={900} alt="Logo" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
