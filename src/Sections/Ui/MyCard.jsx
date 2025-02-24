import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";
import styles from './projectCard.module.css';
import { useState, useEffect } from "react";

const MyCard = ({ title, description, imageUrl, link }) => {
  const [isLearn, setIsLearn] = useState(false);
  return (
    <motion.div
      // whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
      className="max-w-[300px] bg-gradient-to-t from-blue-950 via-35% to-black text-amber-50 rounded-2xl shadow-lg overflow-hidden border-0"
    >
      <div className="bg-blue-100 flex items-center justify-center">
        <img src={imageUrl} alt={title} className="max-w-full object-cover" />
      </div>
      <div className="p-4 relative">
        <h2 className="text-lg font-semibold text-indigo-700">{title}</h2>
        <a
          href= ''
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-500"
        >
          <FaGithub className="absolute top-1 right-2" size={25}/>
        </a>
        {/* <p className="text-gray-600 text-sm mt-2">{isLearn?description:(description.slice(0,100)+'...')}</p> */}
        <motion.div
          initial={{ height: "auto" }}
          animate={{ height: isLearn ? "auto" : "60px" }} // Collapses if isLearn is false
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden text-white text-sm mt-2 "
        >
          {isLearn ? description : description.slice(0, 90) + "..."}
        </motion.div>

        <a className=" cursor-pointer text-blue-700 text-[1rem]" onClick={()=>setIsLearn(!isLearn)}>{isLearn?'less ':'more '}
          <IoIosArrowDropup className={`${isLearn&&styles.rotate} `+ 'inline-block transition-all duration-500'} />
        </a>

      </div>
    </motion.div>
  );
};

export default MyCard;
