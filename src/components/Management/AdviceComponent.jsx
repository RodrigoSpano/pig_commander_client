import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Spinner } from "@nextui-org/react";

export default function InvestmentAdvice() {
  const journal = useSelector((state) => state.journalAPI.arrayJournals);
  return (
    <div className="flex w-5/8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {journal.length > 0 ? (
          <div className="grid grid-cols-1">
            {journal.slice(0, 1).map((element, index) => (
              <motion.div
                key={index}
                className="min-h-[33vh] flex border dark:border-lowGrayDark  rounded-lg m-[15px]  bg-cover bg-center"
                style={{ backgroundImage: `url(${element.image})` }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3>{element.tittle}</h3>
                <div class=" flex  justify-around items-center p-4 mt-auto rounded-tl-[1000px] gap-2 ">
                  <div className="flex flex-col bg-black/30 justify-center rounded-lg w-[70%] backdrop-blur-xl p-4">
                    <p class="text-white dark:text-white text-sm mb-3 max-h-[3.7em] overflow-hidden leading-[1.2] ">
                      {element.summary}
                    </p>
                    <p className="text-xs text-white">
                      Author: {element.author}
                    </p>
                  </div>
                  <a
                    href={element.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-gradient-to-r from-pink-400 to-pink-600 text-white p-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
                  >
                    Read more
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <Spinner color="danger" size="lg" />
        )}
      </motion.div>
    </div>
  );
}
