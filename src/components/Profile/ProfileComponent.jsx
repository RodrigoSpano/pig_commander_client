'use client'
import React, { useEffect, useState } from "react";
import PersonalInformation from "./Subcomponents/Personal Information/PersonalInformation";
import ProfileImage from "./Subcomponents/ProfileImage";
import AppSettings from "./Subcomponents/AppSettings";
import { useSelector } from "react-redux";
import LoaderComponent from "../Loader/LoaderComponent";

function ProfileComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const userLogged = useSelector((state) => state.user.logged);

  useEffect(() => {
    if (userLogged) {
      setIsLoading(false);
    }
  }, [userLogged]);

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <main className="m-6 select-none">
          <section className="mt-24 md:mt-0">
            <h1 className="font-bold text-regularPink text-3xl sm:text-2xl md:mb-6 md:text-4xl lg:text-5xl xl:text-6xl ">
              Account Settings
            </h1>
          </section>

          <section className="flex flex-col space-y-4 sm:space-y-4">
            <div className="flex flex-col-reverse lg:flex-row space-y-4 sm:space-y-0 md:space-y-4 md:space-x-4 lg:space-y-0 xl:space-y-4">
              <PersonalInformation className="w-full lg:w-1/2 xl:w-2/3" />
              <ProfileImage className="w-full lg:w-1/2 xl:w-1/3" />
            </div>

            <div className="w-full">
              <AppSettings />
            </div>
          </section>
        </main>
      )}
    </>
  );
}
export default ProfileComponent;
