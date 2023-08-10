import React, { useEffect } from 'react';
import { ImExit } from 'react-icons/im';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '@/redux/actions/userActions';
import { useCookies } from 'react-cookie';

const LogOut = () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.7 } },
  };

  const hoverVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <Link href="/login" onClick={() => removeCookie('token', {path: '/'})}>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <motion.div
          variants={hoverVariants}
          whileHover="hover"
          className="flex cursor-pointer font-semibold py-4 pl-3 rounded-sm my-1 text-boldGray hover:text-red-600"
        >
          <motion.span whileHover={{ scale: 1.2 }}>
            <ImExit className="text-2xl mr-2 " />
          </motion.span>
          Log Out
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default LogOut;
