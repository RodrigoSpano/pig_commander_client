'use client'
import ProfileComponent from "@/components/Profile/ProfileComponent";
import ProfileComponentEs from "@/components/Profile/ProfileComponentEs";
import { useSelector } from "react-redux";

export default function Profile() {
  const selectedLanguage = useSelector((state) => state.language);

  return (
    <>
      {selectedLanguage === "en" ? (
        <ProfileComponent />
      ) : (
        <ProfileComponentEs />
      )}
    </>
  );
}
