import React from 'react'

const Button = ({text,onClick}) => {
  return (
    <button onClick={onClick} className='m-1 bg-gradient-to-l from-pink-700 to-gray-700 px-6 py-2 border-none  rounded-[8px] duration-300 hover:shadow-x'>
      {text}
    </button>
  )
}

export default Button
