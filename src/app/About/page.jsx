'use client'
import React from "react";
import AboutPage from '../../components/Landing/About/AboutPage'
import { useSelector } from "react-redux";
import AboutPageEs from "@/components/LandingEs/AboutEs/AboutPageEs";

export default function About() {
  const selectedLanguage = useSelector((state) => state.language);

  return (
    <>
    {selectedLanguage === "en" ? <AboutPage /> : <AboutPageEs/>}
    </>
)}