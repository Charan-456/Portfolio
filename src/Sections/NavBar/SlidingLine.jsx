import React from 'react'
import { Link } from 'react-router-dom'
// import { a } from 'react-router-dom';

const SlidingLine = ({entries,lineColor="bg-blue-400", duration="duration-300"}) => {
  return (<>
            {entries.map(entry=>(
                <div key={entry.name} className='relative'>
                    <div className={`pb-1 after:content-[""] after:block after:bg-blue-400 after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0  hover:after:w-full after:transition-all after:${duration}`}>
                        {/* <a to={`/${entry.toLowerCase()}`}>{entry}</a> */}
                        <button onClick={()=>{
                            const ele = document.getElementById(`${entry.id}`)
                            console.log(ele);
                            ele?.scrollIntoView({
                                behavior:'smooth'
                            })
                        }}>{entry.name}</button>
                    </div>
                </div>
            ))}

         </>
    
    
  )
//   
}

export default SlidingLine