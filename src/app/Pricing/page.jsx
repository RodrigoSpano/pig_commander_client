'use client'
import React from "react";
import PricingPage from '../../components/Landing/Pricing/Pricing'
import PricingEs from "@/components/LandingEs/PricingEs/PricingEs";
import { useSelector } from "react-redux";

export default function Pricing() {
  const selectedLanguage = useSelector((state) => state.language);

  return (
    <>
    {selectedLanguage === "en" ? <PricingPage /> : <PricingEs />}
    </>
  );
}