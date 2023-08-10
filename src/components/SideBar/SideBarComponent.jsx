'use client'
import Logo from "./Subcomponents/Logo";
import Dashboard from './Subcomponents/Dashboard'
import Management from './Subcomponents/Management'
import Wallet from './Subcomponents/Wallet'
import Reports from './Subcomponents/Reports'
import Profile from './Subcomponents/Profile'
import Settings from './Subcomponents/Settings'
import Help from './Subcomponents/Help'
import LogOut from "./Subcomponents/LogOut";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "@/redux/actions/userActions";
import { getAllSavings } from "@/redux/actions/savingsActions";
import { useCookies } from "react-cookie";

export default function SideBar() {

  const user = useSelector(state => state.user)
  const savings = useSelector(state => state.savings.allSavings)
  const [cookies, setCookie] = useCookies();
  const dispatch = useDispatch()


  useEffect(() => {
      if(cookies.token){
        if (!user.logged) {
          dispatch(getUserData(cookies.token))
        }
        if(!savings.length)
        dispatch(getAllSavings(cookies.token));
      }

  }, [dispatch])

  return (
    <div className="bg-white px-6 rounded-r-3xl select-none">
      <div className="my-8">
        <Logo />
        <Dashboard />
        <Management />
        <Wallet />
        <Reports />
        <Profile />
      </div>

      <hr />

      <div className="my-8">
        <Settings />
        <Help />
      </div>

      <hr />

      <div className="my-8">
        <LogOut />
      </div>
    </div>
  );
}
