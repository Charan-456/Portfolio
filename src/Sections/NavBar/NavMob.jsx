import React, { useState,  useEffect } from 'react'
import { LuListCollapse } from "react-icons/lu";
import { Link } from 'react-router-dom';

const NavMob = React.memo(({isOpen, toggleModal})=>{

  useEffect(() => {
    console.log('NavMob - isOpen:', isOpen); // Just for debugging
  }, [isOpen]);
  
  return (
    <div className=' text-white text-xl relative'>
        <div className='absolute top-2 left-2'>
          <LuListCollapse size={16} className='cursor-pointer' onClick={()=>(toggleModal())}/>
        </div>
        <div className='pt-10 px-2 flex flex-col justify-between text-[1rem] h-[170px]'>
          <Link>
            Home
          </Link>
          <Link>
            About
          </Link>
          <Link>
            Projects
          </Link>
          <Link>
            Education
          </Link>
          <Link>
            Contact
          </Link>
        </div>
      
    </div>
  )
})

export default NavMob
