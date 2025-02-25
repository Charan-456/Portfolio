import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import SlidingLine from './SlidingLine';
import NavMob from './NavMob';
import './styles.css';

const NavBar = ({ scrollPx }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [zIndex, setZIndex] = useState(''); // Track the zIndex

  const entries = ["Home", "About", "Experience", "Products", "Contact"];

  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle the modal open/close
  };

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
        className={`fixed top-0 px-10 bg-gradient-to-l from-black via-gray-900 to-blue-700 slide text-white h-15 flex justify-between items-center z-100 transition-all duration-400`}>
        <SlidingLine entries={["CR"]} />

        <div className='sm:hidden cursor-pointer'>
          <RxHamburgerMenu onClick={toggleModal} />
        </div>

        <div className='w-[400px] sm:flex justify-between hidden'>
          <SlidingLine entries={entries} />
        </div>
      </nav>

      {<div
        style={{
          transition:'all 300ms',
          transform:`${isOpen?'':'translateX(100%)'}`,
          zIndex: zIndex,
          backdropFilter: 'blur(20px)' // Apply zIndex here, it changes after the delay when closing
        }}
        className='fixed h-screen left-[50%] right-0'>
        {/* Pass the state down to NavMob */}
        <NavMob isOpen={isOpen} toggleModal={toggleModal} />
      </div>}
    </>
  );
}

export default NavBar;
