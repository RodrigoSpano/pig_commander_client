import React from "react";
import { motion } from "framer-motion";

const UsersCards = () => {
  const count = {
    total: 74507,
    basic: 41051,
    pro: 33456,
    baned: 540,
  };

  const cardStyles =
    "px-8 py-10 bg-white rounded-lg shadow-md text-center";

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
  };

  const cardHoverVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
      variants={cardVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className={cardStyles}
        variants={cardHoverVariants}
        whileHover="hover"
      >
        <h2 className="font-semibold text-2xl text-neutral-800 mb-4">
          Total Users
        </h2>
        <h1 className="font-bold text-5xl text-neutral-800">{count.total}</h1>
      </motion.div>

      <motion.div
        className={cardStyles}
        variants={cardHoverVariants}
        whileHover="hover"
      >
        <h2 className="font-semibold text-2xl text-neutral-800 mb-4">
          Basic Users
        </h2>
        <h1 className="font-bold text-5xl text-neutral-800">{count.basic}</h1>
      </motion.div>

      <motion.div
        className={cardStyles}
        variants={cardHoverVariants}
        whileHover="hover"
      >
        <h2 className="flex justify-center font-semibold text-2xl text-neutral-800 mb-4 gap-1">
          <span className="text-regularPink">Pro</span>
          <span>Users</span>
        </h2>
        <h1 className="font-bold text-5xl text-neutral-800">{count.pro}</h1>
      </motion.div>

      <motion.div
        className={cardStyles}
        variants={cardHoverVariants}
        whileHover="hover"
      >
        <h2 className="font-semibold text-2xl text-neutral-800 mb-4">
          Banned Users
        </h2>
        <h1 className="font-bold text-5xl text-neutral-800">{count.baned}</h1>
      </motion.div>
    </motion.div>
  );
};

export default UsersCards;
