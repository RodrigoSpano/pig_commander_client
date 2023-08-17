import React from 'react';
import { motion } from 'framer-motion';
import {
  BiFirstPage,
  BiLastPage,
  BiChevronLeft,
  BiChevronRight
} from "react-icons/bi";

const PaginationComponent = ({
  count,
  totalPages,
  nextHandler,
  prevHandler,
  firstPageHandler,
  lastPageHandler
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const buttonHoverVariants = {
    hover: { backgroundColor: '#E5E7EB' },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center space-x-4"
    >
      <motion.button
        variants={buttonHoverVariants}
        whileHover="hover"
        onClick={firstPageHandler}
        className="p-2 rounded-lg focus:outline-none"
      >
        <BiFirstPage className="text-2xl" />
      </motion.button>

      <motion.button
        variants={buttonHoverVariants}
        whileHover="hover"
        onClick={prevHandler}
        className="p-2 rounded-lg focus:outline-none"
      >
        <BiChevronLeft className="text-2xl" />
      </motion.button>

      {count ? (
        <div className="text-lg font-semibold">
          {count} - {totalPages}
        </div>
      ) : null}

      <motion.button
        variants={buttonHoverVariants}
        whileHover="hover"
        onClick={nextHandler}
        className="p-2 rounded-lg focus:outline-none"
      >
        <BiChevronRight className="text-2xl" />
      </motion.button>

      <motion.button
        variants={buttonHoverVariants}
        whileHover="hover"
        onClick={lastPageHandler}
        className="p-2 rounded-lg focus:outline-none"
      >
        <BiLastPage className="text-2xl" />
      </motion.button>
    </motion.div>
  );
};

export default PaginationComponent;
