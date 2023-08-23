// import ReviewsComponent from '@/components/Reviews/ReviewsComponent';
'use client'
import ReviewPage from "@/components/Landing/Reviews/ReviewPage";
import ReviewPageEs from "@/components/LandingEs/Reviews/ReviewPageEs";
import React from "react";
import { useSelector } from "react-redux";

export default function Reviews() {
  const selectedLanguage = useSelector((state) => state.language);

  return <>{selectedLanguage === "en" ? <ReviewPage /> : <ReviewPageEs />}</>;
}
