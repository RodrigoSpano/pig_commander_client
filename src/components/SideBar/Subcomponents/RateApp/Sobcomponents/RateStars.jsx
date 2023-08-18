"use client";
import React, { useState } from "react";
import { HiStar } from "react-icons/hi";
import { motion } from "framer-motion";

const RateStars = ({ onReviewChange }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
    onReviewChange(selectedRating);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-start items-start"
    >
      <h3 className="text-xl font-semibold">Rate Stars</h3>

      <div className="flex">
        {[1, 2, 3, 4, 5].map((index) => (
          <motion.button
            key={index}
            className={`text-gray-300 ${
              index <= rating ? "text-pink-500" : ""
            } focus:outline-none transition-colors`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleRating(index)}
          >
            <HiStar className="w-6 h-6" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default RateStars;
