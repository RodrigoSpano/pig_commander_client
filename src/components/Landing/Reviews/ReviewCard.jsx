import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import StarRating from "./StarRating";
import { HiTrash } from "react-icons/hi";
import { deleteReview } from "@/redux/actions/reviewsAction";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
const ReviewCard = ({ review }) => {
  const [cookies, setCookies] = useCookies();
  const dispatch = useDispatch();
  const { user, rating, content } = review;
  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };
  const handleDelete = () => {
    dispatch(deleteReview(cookies.token));
  };
  return (
    <motion.div
      className="w-full max-w-md p-6 border rounded-lg shadow-md bg-white"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="flex items-center mb-3">
        <HiTrash className="text-4xl" onClick={handleDelete} />
        <div className="mr-4">
          <Image
            src={user.image}
            width={70}
            height={70}
            alt="UserImage"
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            {user.name} {user.lastname}
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
