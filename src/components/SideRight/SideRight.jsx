import React from "react";
import Logo from '@/utils/Images/logoSide.png';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function SignUpComponent () {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="invisible sm:visible w-2/4 bg-gradient-to-r from-boldPink to-regularPink flex items-center justify-center h-screen"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl h-3/4 w-3/5 backdrop-opacity-10 backdrop-invert bg-white/30 flex items-center justify-center"
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-white font-bold mb-5 text-center text-5xl"
                    >
                        Welcome to
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Image src={Logo} alt="logo" />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}
