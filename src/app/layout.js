"use client";
import ReduxProvider from "../redux/ReduxProvider";
import { CookiesProvider } from "react-cookie";
import "./globals.css";
import { Inter } from "next/font/google";
import SideBar from "../components/SideBar/SideBarComponent";
import { usePathname } from "next/navigation";
import axios from "axios";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });
// cambia en el deploy x eso es un env
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URI;

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <NextUIProvider>
            <CookiesProvider>
              <ReduxProvider>
                <div className="flex dark:bg-strongGray ">
                  {path === "/login" ||
                  path === "/signup" ||
                  path === "/services/success" ||
                  path === "/about" ||
                  path === "/pricing" ||
                  path === "/reviews" ||
                  path === "/securitypolicy" ||
                  path === "/features" ||
                  path === "/" ? null : (
                    <SideBar />
                  )}
                  <div className="w-screen dark:bg-strongGray">{children}</div>
                </div>
              </ReduxProvider>
            </CookiesProvider>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
