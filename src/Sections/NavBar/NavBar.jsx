import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import SlidingLine from './SlidingLine'
import { useEffect,useState } from 'react';
import './styles.css'

const NavBar = ({scrollPx}) => {
  const [mount, setMount]=useState(false);
  useEffect(()=>{
    setMount(true);
  },[])

  const entries=["Home","About","Experience","products","Contact"];
  return (
    <nav 
    style={{
      backdropFilter: 'blur(20px)',
      left:`${scrollPx}px`,
       right:`${scrollPx}px`,
       borderRadius:`${scrollPx?'2rem':""}`,
       top:`${scrollPx?'1rem':""}`
    }}
    className={`fixed top-0 px-10 bg-gradient-to-l from-black via-gray-900 to-blue-700  slide text-white h-15 flex justify-between items-center z-100 transition-all duration-400 :""}`}>
      <SlidingLine entries={["CR"]}/>
     <RxHamburgerMenu className='sm:hidden'/>
    <div className='w-[400px] sm:flex justify-between hidden'>
      <SlidingLine entries={entries}/>
    </div>
  </nav>
  )
}

export default NavBar
