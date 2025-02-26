import React, { useState, useEffect } from "react"
import NavBar from "./NavBar";

const Nav = () => {
//   const [scrolled, setScrolled] = useState(false);
  const [scrollPx, setScrollPx] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 760);



  useEffect(() => {

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 760);
    };
   
    
    const handleScroll = () => {
      if (window.scrollY > 100 && window.scrollY<1000) {
        // setScrolled(true);
        !isSmallScreen ? setScrollPx(window.scrollY*0.3):setScrollPx(0);
      }
      else if(window.scrollY>1000){
        !isSmallScreen ? setScrollPx(999*0.3): setScrollPx(0);
      }
      else{
        setScrollPx(0);
      }

      } 
      handleScroll();
    window.addEventListener('resize', handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSmallScreen]);

  return (
    <div className=" relative z-100 ">
      {/* {scrolled ? <FollowNav/> : <Nav />} */}
      <NavBar scrollPx={scrollPx}/>
    </div>
  );
};

export default Nav;
