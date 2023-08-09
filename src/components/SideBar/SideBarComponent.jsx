'use client'
import React, { useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDollarCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { BiSolidDashboard, BiSolidHelpCircle } from "react-icons/bi";
import { ImExit } from "react-icons/im";
//rutas
import Link from "next/link";
//
import Logo from "@/utils/Images/image.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "@/redux/actions/userActions";
import { getMethodsAction } from "@/redux/actions/otherInfoActions";

export default function SideBar() {

  const user = useSelector(state => state.user)
  const methods = useSelector(state => state.others.methods)
  const dispatch = useDispatch()

  useEffect(() => {
      const token = localStorage.getItem('token')
      if (token && !user.logged) { //todo falta get de othersstate
        dispatch(getUserData(token))
      }
      if(!methods.length){
        dispatch(getMethodsAction(token))
      }

  }, [dispatch])
  return (
    <div className="bg-white w-80 h-screen text-boldGray p-4 rounded-r-3xl">
      <span className="flex text-2xl align-center justify-between">
        <Image src={Logo} width={90} height={0} alt="Logo" />
        <p className="text-xl font-extrabold my-10">PigCommander</p>
      </span>
      <div className="mb-4">
        <Link href="/home/dashboard">
          <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:boldPink hover:bg-pink-100 hover:rounded-sm ">
            <span className="text-2xl mr-2">
              <BiSolidDashboard />
            </span>
            Dashboard
          </p>
        </Link>

        <Link href="/home/management">
          <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
            <span className="text-2xl mr-2">
              <AiOutlineDollarCircle />
            </span>
            Management
          </p>
        </Link>

        <Link href="/home/wallet">
          <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
            <span className="text-2xl mr-2">
              <IoWalletOutline />
            </span>
            Wallet
          </p>
        </Link>

        <Link href="/home/reports">
          <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
            <span className="text-2xl mr-2">
              <AiOutlineInfoCircle />
            </span>
            Reports
          </p>
        </Link>

        <Link href="/home/profile">
          <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
            <span className="text-2xl mr-2">
              <CgProfile />
            </span>
            Profile
          </p>
        </Link>
        <Link href="/home/settings">
          <p className="flex ml-5 mt-40 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
            <span className="text-2xl mr-2">
              <IoMdSettings />
            </span>
            Settings
          </p>
        </Link>
        <Link href="/home/help">
          <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
            <span className="text-2xl mr-2">
              <BiSolidHelpCircle />
            </span>
            Help
          </p>
        </Link>
      </div>
      <div className="m-5">
        
        <Link href="/login" onClick={() => localStorage.removeItem('token')}>
          <p className="flex mt-40 cursor-pointer font-semibold hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
            <span className="text-2xl mr-2 ">
              <ImExit />
            </span>
            Log Out
          </p>
        </Link>
      </div>
    </div>
  );
}
