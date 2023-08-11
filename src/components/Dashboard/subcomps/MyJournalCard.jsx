import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJournal } from "@/redux/actions/journalAction";
import { motion } from "framer-motion";
import "./MyJournalCard.css"; // Importa tu archivo de estilos CSS personalizados
import { useCookies } from "react-cookie";

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
      className="p-6 bg-white rounded-lg shadow-md mb-4 select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-4 text-boldPink">My Journal</h2>
      <div className="custom-scrollbar grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-96 overflow-y-scroll">
        {journal.slice(0, visibleNewsCount).map((element, index) => (
          <motion.div
            key={index}
            className="border border-gray-300 p-3 rounded-lg"
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 className="text-lg font-semibold mb-1">{element.title}</h3>
            <img
              src={element.image}
              alt={element.title}
              className="mb-1"
              style={{ maxWidth: "100%" }}
            />
            <p className="text-gray-600 text-sm mb-1">{element.summary}</p>
            <p className="text-xs text-gray-400">Author: {element.author}</p>
            <a
              href={element.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-regularPink hover:underline text-xs"
            >
              Read more
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
