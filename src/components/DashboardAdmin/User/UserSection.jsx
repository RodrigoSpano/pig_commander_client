import React from "react";
import Image from "next/image";
import UserImage from "../../../utils/Images/userimageexample.png";

const user = {
  image: UserImage,
  name: "Mayor",
  lastname: "Commander",
  occupation: "PigCommander Owner",
};

const UserSection = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col mr-4">
        <h2 className="text-xl font-semibold">
          {user.name} {user.lastname}
        </h2>
        <p className="text-gray-500">{user.occupation}</p>
      </div>
      <div className="w-16 h-16 overflow-hidden rounded-full">
        <Image src={user.image} width={90} height={90} alt="UserImage" />
      </div>
    </div>
  );
};

export default UserSection;
