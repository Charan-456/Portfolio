import React from 'react'


const Card = ({title="Title",subTitle="This is a sub title",content="lorem"}) => {
  return (
/* From Uiverse.io by Javierrocadev */ 
<div className="group hover:before:scale-95 hover:before:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl before:from-sky-200 before:via-orange-200 before:to-orange-700 before:absolute before:top-0 w-80 h-72  hover:before:h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
  <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
    <span className="text-2xl font-semibold">George Johnson</span>
    <p>Support Specialist</p>
  </div>
  <a className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500" href="#">Folow</a>
</div>

  )
}

export default Card




