'use client'
import FeaturesPage from "../../components/Landing/Features/FeaturesPage";
import { useSelector } from "react-redux";
import FeaturesPageEs from "@/components/LandingEs/FeaturesEs/FeaturesPageEs";

export default function Features() {
  const selectedLanguage = useSelector((state) => state.language);

  return <>{selectedLanguage === "en" ? <FeaturesPage /> : <FeaturesPageEs />}</>;
}
