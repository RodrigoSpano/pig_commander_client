import React from "react";
import { motion } from "framer-motion";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

const TransactionCard = ({ transaction, handleDetail }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const cardHoverVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between px-6 py-4 mx-8 my-2 bg-white  border dark:bg-mediumGrayDarkMode border-gray-200 rounded-lg cursor-pointer"
      onClick={() => {
        handleDetail(transaction);
      }}
    >
      <div className="flex flex-col">
        <p className="text-lg font-semibold dark:text-white">{transaction.name}</p>
        <p
          className={`text-sm ${
            transaction.type === "expense" ? "text-red-500" : "text-green-500"
          }`}
        >
          $ {transaction.amount}
        </p>
      </div>
      <motion.div
        variants={cardHoverVariants}
        whileHover="hover"
        className="flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-strongGray rounded-full"
      >
        {transaction.type === "expense" ? (
          <BiTrendingDown className="h-5 w-5 text-red-500" />
        ) : (
          <BiTrendingUp className="h-5 w-5 text-green-500" />
        )}
      </motion.div>
    </motion.div>
  );
};

export default TransactionCard;
