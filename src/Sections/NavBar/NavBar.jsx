import React, { useState, useEffect, useRef } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import SlidingLine from './SlidingLine';
import NavMob from './NavMob';
import './styles.css';

const NavBar = ({ scrollPx }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zIndex, setZIndex] = useState('');
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null); // Track the zIndex
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const entries = [{name:"Home",id:"home"}, {name:"About",id:'about'}, {name:"Experience", id:"experience"}, {name:"Projects", id:"projects"}, {name:"Contact",id:"contact"}];

  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle the modal open/close
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target) && hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target) ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      const openMen = window.innerWidth < 640;

      if (!openMen) {
        setIsOpen(false); // Close modal when switching to larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  // Handle the zIndex change with delay
  useEffect(() => {
    let timer;
    if (isOpen) {
      setZIndex('1001'); // Set zIndex immediately when open
    } else {
      // Set delay for when closing the menu
      timer = setTimeout(() => {
        setZIndex('');
      }, 200); // 1000ms delay before setting zIndex to ''
    }

    // Cleanup timeout if the component is unmounted or isOpen changes
    return () => clearTimeout(timer);
  }, [isOpen]);
  return (
    <>
      <nav
        style={{
          backdropFilter: 'blur(20px)',
          left: `${scrollPx}px`,
          right: `${scrollPx}px`,
          borderRadius: `${scrollPx ? '2rem' : ''}`,
          top: `${scrollPx ? '1rem' : ''}`
        }}
        className={`fixed top-0 px-10 bg-gradient-to-r from-gray-300 to-gray-400 dark:bg-gradient-to-l dark:from-black dark:via-gray-900 dark:to-blue-700 slide dark:text-white h-15 flex justify-between items-center z-100 transition-all duration-400 backdrop-blur-2xl`}>
        <SlidingLine entries={[{name:"CR", id:"home"}]} />

        <div ref={hamburgerRef} className='sm:hidden cursor-pointer'>
          <RxHamburgerMenu onClick={toggleModal} />
        </div>

        <div className='w-[400px] sm:flex justify-between hidden'>
          <SlidingLine entries={entries} />
        </div>
      </nav>

      {<div
        ref={menuRef}
        style={{
          transition:'all 300ms',
          transform:`${isOpen?'':'translateX(100%)'}`,
          zIndex: zIndex,
          backdropFilter: 'blur(20px)' // Apply zIndex here, it changes after the delay when closing
        }}
        className='fixed h-screen left-[50%] right-0'>
        {/* Pass the state down to NavMob */}
        <NavMob toggleModal={toggleModal} />
      </div>}
    </>
  );
}

export default NavBar;
