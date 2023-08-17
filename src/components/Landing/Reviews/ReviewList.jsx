import React, { useState } from 'react';
import { motion } from 'framer-motion';
import userImage from '../../../utils/Images/userimageexample.png';
import ReviewCard from './ReviewCard';

const reviews = [
    {
        name: 'John Doe',
        stars: 5,
        opinion: 'Great product! It exceeded my expectations.',
        image: userImage,
    },
    {
        name: 'Jane Smith',
        stars: 4,
        opinion: 'I really liked the user-friendly interface.',
        image: userImage,
    },
    {
        name: 'Michael Johnson',
        stars: 3,
        opinion: 'Decent app, but could use some improvements.',
        image: userImage,
    },
    {
        name: 'Sarah Williams',
        stars: 5,
        opinion: "Absolutely love it! Best finance app I've used.",
        image: userImage,
    },
    {
        name: 'Michael Johnson',
        stars: 3,
        opinion: 'Decent app, but could use some improvements.',
        image: userImage,
    },
    {
        name: 'Sarah Williams',
        stars: 5,
        opinion: "Absolutely love it! Best finance app I've used.",
        image: userImage,
    },
    {
        name: 'Michael Johnson',
        stars: 3,
        opinion: 'Decent app, but could use some improvements.',
        image: userImage,
    },
    {
        name: 'Sarah Williams',
        stars: 5,
        opinion: "Absolutely love it! Best finance app I've used.",
        image: userImage,
    },
    {
        name: 'Sarah Williams',
        stars: 5,
        opinion: "Absolutely love it! Best finance app I've used.",
        image: userImage,
    },
    {
        name: 'Sarah Williams',
        stars: 5,
        opinion: "Absolutely love it! Best finance app I've used.",
        image: userImage,
    },
    {
        name: 'Sarah Williams',
        stars: 5,
        opinion: "Absolutely love it! Best finance app I've used.",
        image: userImage,
    },
    {
        name: 'Sarah Williams',
        stars: 5,
        opinion: "Absolutely love it! Best finance app I've used.",
        image: userImage,
    },
];

const ReviewList = () => {
    const [visibleReviews, setVisibleReviews] = useState(6);
  
    const handleSeeMore = () => {
      setVisibleReviews((prevCount) => prevCount + 6);
    };
  
    const seeMoreButtonVariants = {
      initial: { scale: 0.9 },
      hover: { scale: 1, transition: { duration: 0.3 } },
    };
  
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
        {visibleReviews < reviews.length && (
          <div className="col-span-2 lg:col-span-3 flex justify-center">
            <motion.button
              className="bg-gradient-to-r from-regularPink to-boldPink text-white px-8 py-3 rounded-2xl"
              onClick={handleSeeMore}
              variants={seeMoreButtonVariants}
              whileHover="hover"
              initial="initial"
            >
              See More
            </motion.button>
          </div>
        )}
      </div>
    );
  };
  
  export default ReviewList;




