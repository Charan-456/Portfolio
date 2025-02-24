import React from 'react'
import { MyCard, DropEffect } from '../Ui';

const ProjectDesktop = ({projects}) => {
  return (
    <DropEffect inView={true} direction='up' duration={0.7}>
    <section id='about' className=' text-indigo-500 font-bold text-2xl'>
      Projects
    <div className='pt-16 flex gap-3 items-start'>
      {projects.map((project)=>(<div key={project.title} className='flex justify-center'><MyCard description={project.description} title={project.title} imageUrl={project.imageUrl} /></div>))}
    </div>
    </section>
    </DropEffect>
  )
}

export default ProjectDesktop
