import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import StarRating from './StarRating';

const ReviewCard = ({ review }) => {
  const { name, lastname, stars, opinion, image } = review;

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
          <Image
            src={image}
            width={70}
            height={70}
            alt="UserImage"
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            {name} {lastname}
          </h2>
          <div className="mt-2">
            <StarRating stars={stars} />
          </div>
        </div>
      </div>
      <div className="text-gray-600">
        <p>{opinion}</p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
