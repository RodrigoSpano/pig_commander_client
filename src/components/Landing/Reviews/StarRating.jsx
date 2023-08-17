import React from 'react';
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
    <div className="flex items-center">
      {renderStars().map((star, index) => (
        <div key={index} className="mr-1">
          {star}
        </div>
      ))}
    </div>
  );
};

export default StarRating;