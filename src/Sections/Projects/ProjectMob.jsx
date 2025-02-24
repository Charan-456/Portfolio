import React from 'react'
import { MyCard, DropEffect } from '../Ui';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const ProjectMob = ({projects}) => {
  return (
    <DropEffect inView={true} direction='up' duration={0.7}>
    <section id='about' className='pt-25 text-indigo-500 font-bold text-2xl max-w-[1024px]  mx-auto px-[32px]'>
      Projects
    {/* <div className='pt-20 flex gap-3 items-start'> */}
    <Carousel className={'pt-12'} opts={{
    align: "start",
    loop: true,
  }}>
  <CarouselContent>
      {projects.map((project)=>(<CarouselItem key={project.title}><div key={project.title} className='flex justify-center shadow-[0_4px_8px_rgba(0,0,255,0.2)]'><MyCard description={project.description} title={project.title} imageUrl={project.imageUrl} /></div></CarouselItem>))}
    {/* </div> */}
    </CarouselContent>
  <CarouselPrevious className={"cursor-pointer"}/>
  <CarouselNext className={"cursor-pointer"}/>
</Carousel>
    </section>
    </DropEffect>
  )
}

export default ProjectMob
