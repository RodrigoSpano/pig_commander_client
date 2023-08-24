import React, { useEffect } from 'react';
import { ImExit } from 'react-icons/im';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '@/redux/actions/userActions';
import { useCookies } from 'react-cookie';

const LogOut = () => {
  const selectedLanguage = useSelector((state) => state.language);

  const [cookies, setCookie, removeCookie] = useCookies();

  const linkVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    hover: { scale: 1.1, },
  };

  return (
    <Link href="/login" onClick={() => removeCookie('token', { path: '/' })}>
      <div className='hover:bg-pink-50 dark:hover:bg-regularPink py-4 px-6 rounded-sm'>
          <motion.div
            className=' flex items-center justify-start font-semibold cursor-pointer dark:text-white text-boldGray hover:text-red-500'
            variants={linkVariants}
            initial='initial'
            animate='animate'
            whileHover='hover'
          >
            <motion.span className='mr-2'>
              <ImExit className='text-2xl xl:text-3xl' />
            </motion.span>
            <motion.p className='font-semibold cursor-pointer text-base xl:text-lg'>
            {selectedLanguage === "en" ? "Log Out" : "Cerrar sesión"}
            </motion.p>
          </motion.div>
      </div>
    </Link>
  );
};

export default LogOut;
