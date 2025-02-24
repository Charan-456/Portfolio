import React from 'react'
import { Icons, Button, DropEffect, TypingAnimation} from '../Ui'


const Hero = () => {
  return (
    <div id='charan kumar' className='font-Quick h-[100vh] flex items-center mt-[-150px]'>
        <section id="home" className='mx-auto md:px-8 px-[16px] '>
        <DropEffect duration={0.6} direction='up'>
          <div>
            <Icons/>
          </div>
          <h1  className='text-indigo-500  font-bold'>
            <TypingAnimation className={'sm:text-5xl'} duration={50}>
            Hey Hi, I&apos;m Charan Kumar Reddy
            </TypingAnimation>
            
            
            
          </h1>
          </DropEffect>
          <DropEffect direction='up'>
          <p className='text-white text-[1rem] text-justify hyphens-auto'>
            I design and develop modern, responsive, and user-friendly websites that blend creativity with functionality. Passionate about beautiful UI, smooth interactions, and optimized performance, I&apos;m on a journey to master full-stack development.
          </p>
          </DropEffect>
        </section>
        
    </div>

   
  )
}

export default Hero
