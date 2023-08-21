import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJournal } from "@/redux/actions/journalAction";
import { motion } from "framer-motion";
import "./MyJournalCardEs.css";
import { useCookies } from "react-cookie";

export default function MyJournalCardEs () {
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
      className="p-8 bg-white rounded-lg shadow-md select-none dark:bg-mediumGrayDarkMode "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold ml-[20px] text-boldPink dark:text-mediumPinkDark ">Mi Diario</h2>
      <div className="custom-scrollbar grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-h-[36vh] overflow-y-scroll ">
        {journal.slice(0, visibleNewsCount).map((element, index) => (
          <motion.div
            key={index}
            className="border border-gray-300  dark:border-lowGrayDark  rounded-lg m-[15px] "
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>{element.tittle}</h3>
            <div className="flex items-center rounded-t-lg  h-[180px] overflow-hidden border-b-4 w-[100%] ">
              <img
                src={element.image}
                alt={element.title}
                className="mb-1 "
              />
            </div>
            <div class="p-3">
            <p class="text-gray-600 text-sm mb-3 dark:text-white  max-h-[3.7em] overflow-hidden leading-[1.2]">
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
  );
}
