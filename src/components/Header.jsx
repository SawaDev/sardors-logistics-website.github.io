import React from 'react'

const Header = ({ text }) => {
  return (
    <div className='header text-center py-6 relative'>
      <span>{text}</span>
      <h2 className='text-blue-800 pb-2'>{text}</h2>
    </div>
  )
}

export default Header