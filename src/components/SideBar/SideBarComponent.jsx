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

export default function SideBar() {

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
