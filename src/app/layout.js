"use client";
import ReduxProvider from "../redux/ReduxProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import SideBar from "../components/SideBar/SideBarComponent";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className='flex'>
            {path === '/login' || path === '/signup' || path === '/' ? null : <SideBar />}
            <div className='w-screen'>
              {children}
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
