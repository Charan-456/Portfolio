import React, { useState,  useEffect } from 'react'
import { LuListCollapse } from "react-icons/lu";
import { Link } from 'react-router-dom';

const NavMob = React.memo(({ toggleModal})=>{

  return (
    <div className=' text-white text-xl relative'>
        <div className='absolute top-2 left-2'>
          <LuListCollapse size={16} className='cursor-pointer' onClick={()=>(toggleModal())}/>
        </div>
        <div className='pt-10 px-2 flex flex-col justify-between text-[1rem] h-[170px]'>
          <a href="#home" onClick={()=>(toggleModal())}>
            Home
          </a>
          <a href="#about" onClick={()=>(toggleModal())}>
            About
          </a>
          <a href="#projects" onClick={()=>(toggleModal())}>
            Projects
          </a>
          <a href="education" onClick={()=>(toggleModal())}>
            Education
          </a>
          <a href="contact" onClick={()=>(toggleModal())}>
            Contact
          </a>
        </div>
      
    </div>
  )
})

export default NavMob
