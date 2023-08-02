import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineDollarCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { IoWalletOutline } from 'react-icons/io5';
import { IoMdSettings } from 'react-icons/io';
import { BiSolidDashboard, BiSolidHelpCircle } from 'react-icons/bi';
import { ImExit } from 'react-icons/im';

export default function SideBarContainer() {
  return (
    <div className="bg-white w-48 h-screen text-black p-4 rounded- ">
      <div className="text-xl font-extrabold my-10">PigCommander</div>
      <div className="mb-4">
        <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
          <span className="text-2xl mr-2">
            <BiSolidDashboard />
          </span>
          Dashboard
        </p>
        <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
          <span className="text-2xl mr-2">
            <AiOutlineDollarCircle />
          </span>
          Management
        </p>
        <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
          <span className="text-2xl mr-2">
            <IoWalletOutline />
          </span>
          Wallet
        </p>
        <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
          <span className="text-2xl mr-2">
            <AiOutlineInfoCircle />
          </span>
          Reports
        </p>
        <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
          <span className="text-2xl mr-2">
            <CgProfile />
          </span>
          Profile
        </p>
        <p className="flex ml-5 mt-40 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
          <span className="text-2xl mr-2">
            <IoMdSettings />
          </span>
          Settings
        </p>
        <p className="flex ml-5 my-10 font-semibold cursor-pointer hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
          <span className="text-2xl mr-2">
            <BiSolidHelpCircle />
          </span>
          Help
        </p>
      </div>
      <div className="m-5">
        <p className="flex mt-40 cursor-pointer font-semibold hover:text-pink-600 hover:bg-pink-100 hover:rounded-md ">
          <span className="text-2xl mr-2 ">
            <ImExit />
          </span>
          Log Out
        </p>
      </div>
    </div>
  );
}