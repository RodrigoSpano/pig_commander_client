import React from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { FaMoon } from 'react-icons/fa';
import { HiSun } from 'react-icons/hi';

const ThemeSwitchLanding = () => {
    const { theme, setTheme } = useTheme();

    const handleChange = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white p-2 rounded-full shadow-md"
                onClick={handleChange}
            >
                {theme === 'dark' ? (
                    <FaMoon className="text-lg text-regularPink" />
                ) : (
                    <HiSun className="text-lg text-regularPink" />
        )}
            </motion.button>
        </motion.div>
    );
};

export default ThemeSwitchLanding;
