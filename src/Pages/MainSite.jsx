import React from 'react'
import { About, ContactForm, Hero } from '../Sections/Comps'
import Project from '@/Sections/Projects/Project'
import WidthWrapper from '../Sections/Utils/WidthWrapper'

const MainSite = () => {
  return (
    <WidthWrapper>
     
      <Hero/>
      <About/>
      <Project/>
      <ContactForm/>
      
    </WidthWrapper>
  )
}

export default MainSite
