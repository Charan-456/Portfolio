import React from 'react'
import { DropEffect } from '../Ui'

const About = () => {
  return (
    <DropEffect inView={true}>
      <section id='about' className='my-25 text-indigo-500 font-bold text-2xl max-w-[1024px] mx-auto px-4'>
        About
        <p className='pt-12 sm:pt-16 text-white font-light text-[1rem] hyphens-auto text-justify'>
          I’m a passionate front-end developer with a strong eye for design and a deep understanding of modern web technologies. I specialize in crafting responsive, visually appealing, and user-friendly websites that provide seamless experiences across all devices. With expertise in HTML, CSS, JavaScript, Tailwind CSS, and React, I bring creative ideas to life through clean, efficient code and smooth animations.

Currently, I am expanding my skill set to become a full-stack developer, diving into Node.js, Express, MongoDB, PostgreSQL, and API development. My goal is to bridge the gap between front-end aesthetics and back-end functionality, creating scalable and high-performing web applications.

I thrive on problem-solving, continuous learning, and staying updated with the latest web development trends. Whether it's building sleek UI components, optimizing performance, or developing full-stack applications, I am eager to take on new challenges and grow in the ever-evolving tech landscape.
        </p>
    </section>
    </DropEffect>
    
    
  )
}

export default About
