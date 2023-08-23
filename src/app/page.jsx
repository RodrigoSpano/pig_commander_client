'use client'
import LandingPageComponentEs from "@/components/LandingEs/LandingPageComponentEs";
import LandingPageComponent from "../components/Landing/LandingPageComponent";
import { useSelector } from "react-redux";

export default function Home() {
  const selectedLanguage = useSelector((state) => state.language);

  return (
    <main>{selectedLanguage === "en" ? <LandingPageComponent /> : <LandingPageComponentEs/>}</main>
  );
}
