import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom';

const SlidingLine = ({entries,lineColor="bg-blue-400", duration="duration-300"}) => {
  return (<>
            {entries.map(entry=>(
                <div key={entry} className='relative'>
                    <div className={`pb-1 after:content-[""] after:block after:bg-blue-400 after:absolute after:w-0 after:h-1 after:bottom-0 after:left-0  hover:after:w-full after:transition-all after:${duration}`}>
                        <Link to={`/${entry.toLowerCase()}`}>{entry}</Link>
                    </div>
                </div>
            ))}

         </>
    
    
  )
//   
}

export default SlidingLine