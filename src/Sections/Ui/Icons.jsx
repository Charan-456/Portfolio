import React from 'react'
import {
	FaLinkedin,
	FaGithub,
	FaEnvelope,
	FaCalendarAlt,
} from "react-icons/fa";

const Icons = () => {
return (
    <div className='flex gap-4 '>
    <div className='group  relative'>
      <h2 className="absolute left-1/2 whitespace-nowrap -translate-x-1/2 bottom-full text-lg font-semibold text-gray-800 dark:text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Follow me:
      </h2>
      <a 
        href="https://www.linkedin.com/in/charankumarrr/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <FaLinkedin size={18} className="text-blue-600 hover:text-blue-800 sm:size-[25px]" />
      </a>
    </div>
        <div className=' group  relative'>
      <h2 className="absolute left-1/2 whitespace-nowrap -translate-x-1/2 bottom-full text-lg font-semibold text-gray-800 dark:text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Follow me:
      </h2>
      <a 
        href="https://www.linkedin.com/in/charankumarrr/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <FaGithub size={18} className="text-blue-600 hover:text-blue-800 sm:size-[25px]" />
      </a>
    </div>
        <div className='group inline-block relative'>
      <h2 className="absolute left-1/2 whitespace-nowrap -translate-x-1/2 bottom-full text-lg font-semibold text-gray-800 dark:text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Follow me:
      </h2>
      <a 
        href="mailto:yalamakondac@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <FaEnvelope size={18} className="text-blue-600 hover:text-blue-800 sm:size-[25px]" />
      </a>
    </div>
        <div className='group relative'>
      <h2 className="absolute left-1/2 whitespace-nowrap -translate-x-1/2 bottom-full text-lg font-semibold text-gray-800 dark:text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Follow me:
      </h2>
      <a 
        href="https://www.linkedin.com/in/charankumarrr/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <FaCalendarAlt size={18} className="text-blue-600 hover:text-blue-800  sm:size-[25px]" />
      </a>
    </div>

    </div>
    
    
  );
}

export default Icons
