"use client";
import ReduxProvider from "../redux/ReduxProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import SideBar from "../components/SideBar/SideBarComponent";
import { usePathname } from "next/navigation";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });
// axios.defaults.baseURL = `${process.env.API_URI}`
axios.defaults.baseURL = 'http://localhost:8080/api'

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="flex">
            {path === "/login" ||
              path === "/signup" ||
              path === "/about" ||
              path === "/pricing" ||
              path === "/features" ||
              path === "/" ? null : (
              <SideBar />
            )}
            <div className="w-screen">{children}</div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
