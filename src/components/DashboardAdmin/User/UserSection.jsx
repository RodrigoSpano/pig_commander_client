import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import UserImage from "../../../utils/Images/userimageexample.png";

const user = {
  image: UserImage,
  name: "Mayor",
  lastname: "Commander",
  occupation: "PigCommander Owner",
};

const UserSection = () => {
  const userSectionVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
  };

  return (
    <motion.div
      className="flex items-center"
      variants={userSectionVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex flex-col mr-4">
        <motion.h2
          className="text-xl font-semibold"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.6 } }}
        >
          {user.name} {user.lastname}
        </motion.h2>
        <motion.p
          className="text-gray-500"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.7 } }}
        >
          {user.occupation}
        </motion.p>
      </div>
      <div className="w-16 h-16 overflow-hidden rounded-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 0.6, delay: 0.8 } }}
          className="w-16 h-16 overflow-hidden rounded-full"
        >
          <Image src={user.image} width={90} height={90} alt="UserImage" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UserSection;
