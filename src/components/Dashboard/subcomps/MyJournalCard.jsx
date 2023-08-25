import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJournal } from "@/redux/actions/journalAction";
import { motion } from "framer-motion";
import "./MyJournalCard.css";
import { useCookies } from "react-cookie";
import { Spinner } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";

export default function MyJournalCard() {
  const dispatch = useDispatch();
  const journal = useSelector((state) => state.journalAPI.arrayJournals);
  const [visibleNewsCount, setVisibleNewsCount] = useState(4);

  const [cookies, setCookie] = useCookies();

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setVisibleNewsCount((prevCount) => prevCount + 4);
    }
  };

  useEffect(() => {
    dispatch(getJournal(cookies.token));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="p-8 bg-white dark:bg-mediumGrayDarkMode rounded-lg shadow-md select-none "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold ml-[20px] text-boldPink dark:text-mediumPinkDark ">
        My Journal
      </h2>
      {journal.length > 0 ? (
        <div className="custom-scrollbar grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-h-[36vh] min-h-[36vh] overflow-y-scroll ">
          {journal.slice(0, visibleNewsCount).map((element, index) => (
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
                  <p className="text-xs text-white">Author: {element.author}</p>
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
        <div className="max-h-[36vh] min-h-[36vh] flex flex-col gap-10 justify-center items-center">
          <Spinner color="danger" size="lg" />
          <Progress
            size="sm"
            isIndeterminate
            aria-label="Loading..."
            className="max-w-md"
            color="danger"
          />
        </div>
      )}
    </motion.div>
  );
}
