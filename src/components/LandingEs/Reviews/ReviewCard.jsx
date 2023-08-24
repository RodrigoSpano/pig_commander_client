import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import StarRating from "./StarRating";

const ReviewCard = ({ review }) => {
  const { user, rating, content } = review;
  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };
  return (
    <motion.div
      className="w-full max-w-md p-6 border rounded-lg shadow-md bg-white"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="flex items-center mb-3">
        <div className="mr-4">
          {user === null ? (
            <Image
              src={
                "https://res.cloudinary.com/dcxaangkl/image/upload/v1692371023/profile_pics/dyfzdf21fnalvtgsp3gi.webp"
              }
              width={70}
              height={70}
              alt="UserImage"
              className="rounded-full"
            />
          ) : (
            <Image
              src={user?.image}
              width={70}
              height={70}
              alt="UserImage"
              className="rounded-full"
            />
          )}
        </div>
        <div>
          <h2 className="dark:text-black text-lg font-semibold">
            {user === null ? "Anonymous" : `${user.name} ${user.lastname}`}
          </h2>
          <div className="mt-2">
            <StarRating stars={rating} />
          </div>
        </div>
      </div>
      <div className="text-gray-600">
        <p>{content}</p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
