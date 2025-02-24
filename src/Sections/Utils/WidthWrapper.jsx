import React from 'react'

const WidthWrapper = ({children}) => {
  return (
    <div className=' max-w-[1024px] mx-auto px-2 py-[128px] sm:px-8 sm:text-justify hyphens-auto'>
      {children}
    </div>
  )
}

export default WidthWrapper
