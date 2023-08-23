'use client'
import ReviewPage from "../../components/Landing/Reviews/ReviewPage";
import { useSelector } from "react-redux";
import ReviewPageEs from "@/components/LandingEs/Reviews/ReviewPageEs";

export default function Review() {
  const selectedLanguage = useSelector((state) => state.language);

  return <>{selectedLanguage === "en" ? <ReviewPage /> : <ReviewPageEs />}</>;
}
