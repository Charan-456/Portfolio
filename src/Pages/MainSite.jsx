import React from 'react'
import { About, Hero } from '../Sections/Comps'
import Project from '@/Sections/Projects/Project'
import WidthWrapper from '../Sections/Utils/WidthWrapper'

const MainSite = () => {
  return (
    <WidthWrapper>
     
      <Hero/>
      <About/>
      <Project/>
      
    </WidthWrapper>
  )
}

export default MainSite
