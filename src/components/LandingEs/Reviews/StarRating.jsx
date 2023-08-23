import React from 'react';
import { motion } from 'framer-motion';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const StarRating = ({ stars }) => {
  const filledStars = Math.floor(stars);
  const hasHalfStar = stars - filledStars >= 0.5;

  const renderStars = () => {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        starArray.push(<AiFillStar key={i} className="text-regularPink" />);
      } else if (i === filledStars + 1 && hasHalfStar) {
        starArray.push(<AiFillStar key={i} className="text-regularPink" />);
      } else {
        starArray.push(<AiOutlineStar key={i} className="text-gray-400" />);
      }
    }
    return starArray;
  };

  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {renderStars().map((star, index) => (
        <motion.div
          key={index}
          className="mr-1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {star}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StarRating;
