"use client";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "@/redux/actions/userActions";
import { getAllSavings } from "@/redux/actions/savingsActions";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../utils/Images/image.png";
import Dashboard from "./Subcomponents/Dashboard";
import Management from "./Subcomponents/Management";
import Wallet from "./Subcomponents/Wallet";
import Profile from "./Subcomponents/Profile";
import Help from "./Subcomponents/Help";
import LogOut from "./Subcomponents/LogOut";
import RateApp from "./Subcomponents/RateApp";
import { BiSolidDashboard, BiSolidHelpCircle, BiStar } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { ImExit } from 'react-icons/im';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllInversions } from "@/redux/actions/inversionsActions";
import { setLanguage } from "@/redux/features/languageSlice";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const savings = useSelector((state) => state.savings.allSavings);
  const languageState = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (cookies.token) {
      if (!user.logged) {
        dispatch(getUserData(cookies.token));
      }
      if (!savings.length) {
        dispatch(getAllSavings(cookies.token));
      }
       dispatch(getAllInversions(cookies.token));
    }
  }, [dispatch]);


  const menuItems = [
    {
      icon: <BiSolidDashboard className="mr-1 text-regularPink text-3xl" />,
      text: "Dashboard",
      path: "/home/dashboard",
    },
    {
      icon: (
        <AiOutlineDollarCircle className="mr-1 text-regularPink text-3xl" />
      ),
      text: "Management",
      path: "/home/management",
    },
    {
      icon: <IoWalletOutline className="mr-1 text-regularPink text-3xl" />,
      text: "Wallet",
      path: "/home/wallet",
    },
    {
      icon: <CgProfile className="mr-1 text-regularPink text-3xl" />,
      text: "Profile",
      path: "/home/profile",
    },
    {
      icon: <BiSolidHelpCircle className="mr-1 text-regularPink text-3xl" />,
      text: "Help",
      path: "/home/help",
    },
    {
      icon: <BiStar className="mr-1 text-regularPink text-3xl" />,
      text: "Rate App",
      path: "/",
    },
    {
      icon: <ImExit className="mr-1 text-regularPink text-3xl" />,
      text: "Log Out",
      path: "/login",
    },
  ];

  return (
    <>
      {/* DESKTOP */}
      <nav className="bg-white dark:bg-mediumGrayDarkMode hidden p-4 w-72 h-screen rounded-r-md shadow-lg box-border items-center justify-start md:flex flex-col select-none">
        <div>
          {/* LOGO */}
          <div className="flex items-center justify-center mb-4 xl:mb-6">
            <Image src={Logo} alt="Logo" className=" md:w-8 lg:w-12 xl:w-14" />
            <p className="font-bold text-md xl:ml-4 lg:ml-2">Pig Commander</p>
          </div>

          {/* REDIRECCIONES */}
          <section className="space-y-4 xl:space-y-12">
            <div className="space-y-1 xl:space-y-3">
              <Dashboard />
              <Management />
              <Wallet />
              <Profile />
            </div>

            <hr />

            <div className="space-y-1 xl:space-y-3">
              <Help />
              <RateApp />
            </div>

            <hr />

            <div className="space-y-1 xl:space-y-3">
              <LogOut />
            </div>
          </section>
        </div>
      </nav>

      {/* MOBILE */}
      <nav className="absolute w-screen h-min md:hidden bg-white dark:bg-mediumGrayDarkMode shadow-lg">
        <div className="flex justify-between items-center px-4 py-2">
          {/* LOGO */}
          <div className="flex items-center">
            <Image src={Logo} width={50} alt="Logo" />
            <p className="font-bold text-md ml-4">Pig Commander</p>
          </div>

          {/* HAMBURGER ICON */}
          <div className="block md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FiX className='w-6 h-6 text-gray-700  dark:text-white' />
              ) : (
                <FiMenu className="w-6 h-6 text-gray-700 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile and Tablet Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="menu-dropdown"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="bg-white dark:bg-mediumGrayDarkMode w-full mt-2 py-1 shadow-lg"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link href={item.path}>
                    <div className="flex justify-start items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-grayHover">
                      {item.icon}
                      <p className="ml-2 text-md text-gray-700 dark:text-white">{item.text}</p>
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

export default NavBar;
