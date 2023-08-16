"use client";
import ReduxProvider from "../redux/ReduxProvider";
import { CookiesProvider } from "react-cookie";
import "./globals.css";
import { Inter } from "next/font/google";
import SideBar from "../components/SideBar/SideBarComponent";
import { usePathname } from "next/navigation";
import axios from "axios";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });
// cambia en el deploy x eso es un env
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URI;

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <CookiesProvider>
            <ReduxProvider>
              <div className="flex">
                {path === "/login" ||
                path === "/signup" ||
                path === "/google/success" ||
                path === "/about" ||
                path === "/pricing" ||
                path === "/reviews" ||
                path === "/" ? null : (
                <SideBar />
              )}
              <div className="w-screen">{children}</div>
            </div>
          </ReduxProvider>
        </CookiesProvider>
      </NextUIProvider>

      </body>
    </html>
  );
}
