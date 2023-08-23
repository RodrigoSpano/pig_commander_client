import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function InvestmentAdvice() {
  const journal = useSelector((state) => state.journalAPI.arrayJournals);
  const [visibleNewsCount, setVisibleNewsCount] = useState(1);

  return (
    <div className="flex w-5/8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="grid grid-cols-1">
          {journal.slice(0, visibleNewsCount).map((element, index) => (
            <motion.div
              key={index}
              className="border border-gray-300  dark:border-lowGrayDark  rounded-lg  "
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center rounded-t-lg  h-[40%] overflow-hidden border-b-4 w-[100%] ">
                <img
                  src={element.image}
                  alt={element.title}
                  className="mb-1 "
                />
              </div>
              <div class="p-1">
                <p class="text-gray-600 text-sm m-2 dark:text-white  max-h-[3.7em] overflow-hidden leading-[1.2]">
                  {element.summary}
                </p>
                <p className="text-xs text-gray-400">Autor: {element.author}</p>
                <a
                  href={element.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-regularPink hover:underline text-xs"
                >
                  Leer más
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
