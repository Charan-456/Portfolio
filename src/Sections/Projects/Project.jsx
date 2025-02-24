import React from 'react'
import { useState, useEffect } from 'react';
import ProjectDesktop from './ProjectDesktop';
import ProjectMob from './ProjectMob';

const Project = () => {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  const projects = [
    {
      title: "Project 1",
      description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ",
      imageUrl: "https://healthinnovationmanchester.com/wp-content/uploads/2020/01/Artificial-Intelligence-AI-Square.jpg"
    },
    {
      title: "Project 2",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ",
      imageUrl: "https://healthinnovationmanchester.com/wp-content/uploads/2020/01/Artificial-Intelligence-AI-Square.jpg"
    },
    {
      title: "Project 3",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first ",
      imageUrl: "https://healthinnovationmanchester.com/wp-content/uploads/2020/01/Artificial-Intelligence-AI-Square.jpg"
    }
  ];
  return (
     <div className='px-4 my-25'>
       {isSmallScreen ? <ProjectMob projects={projects}/> : <ProjectDesktop projects={projects} />}
     </div>
  )
}

export default Project
