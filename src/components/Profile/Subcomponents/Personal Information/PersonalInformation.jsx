"use client";
import React from "react";
import FirstName from "./User Information/FirstName";
import LastName from "./User Information/LastName";
import Email from "./User Information/Email";
import Password from "./User Information/Password";
import CreatedAt from "./User Information/CreatedAt";
import { useSelector } from "react-redux";
import DeleteAccount from "./User Information/DeleteAccount";

function PersonalInformation() {
  const user = useSelector((state) => state.user);
  return (
    <div className="bg-white dark:bg-mediumGrayDarkMode w-full rounded-md shadow-md p-6">
      <h1 className="text-xl lg:text-2xl font-bold text-regularPink mb-6">
        Personal Information
      </h1>
      <div className="flex flex-col md:grid grid-cols-2 gap-6">
        <FirstName user={user} />
        <LastName user={user} />
        <Email user={user} />
        <Password user={user} />
        <CreatedAt user={user} />
        <DeleteAccount />
      </div>
    </div>
  );
}

export default PersonalInformation;
