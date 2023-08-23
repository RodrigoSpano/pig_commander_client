import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import ReviewCard from "./ReviewCard";
import { getAllReviews } from "@/redux/actions/reviewsAction";
import { useCookies } from "react-cookie";

const ReviewListEs = () => {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies();
  const reviews = useSelector((state) => state.reviews.allReviews);
  useEffect(() => {
    dispatch(getAllReviews(cookies.token));
  }, []);

  const handleSeeMore = () => {
    setVisibleReviews((prevCount) => prevCount + 6);
  };

  const seeMoreButtonVariants = {
    initial: { scale: 0.9 },
    hover: { scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {reviews === undefined ? (
        <p>Sin Reseñas aún...</p>
      ) : (
        reviews
          .slice(0, visibleReviews)
          .map((review, index) => <ReviewCard key={index} review={review} />)
      )}
      {visibleReviews < (reviews && reviews.length) && (
        <div className="col-span-2 lg:col-span-3 flex justify-center">
          <motion.button
            className="bg-gradient-to-r from-regularPink to-boldPink text-white px-8 py-3 rounded-2xl"
            onClick={handleSeeMore}
            variants={seeMoreButtonVariants}
            whileHover="hover"
            initial="initial"
          >
            Ver más
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default ReviewListEs;
