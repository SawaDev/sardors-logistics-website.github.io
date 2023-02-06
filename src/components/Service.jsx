import React from 'react'

const Service = ({ imgUrl, title, text }) => {
  return (
    <div className='flex flex-col border-2 border-gray-200 shadow-xl shadow-black-100 hover:shadow-blue-500/20'>
      <div className='h-[240px] overflow-hidden'>
        <img src={imgUrl} className="h-full w-full object-cover grayscale transform ease-in-out duration-200 hover:scale-110 hover:grayscale-0" />
      </div>
      <div className='px-5 pt-5 lg:pb-8 pb-7'>
        <h1 className='mb-2 text-xl font-bold text-blue-800'>{title}</h1>
        <p className='text-gray-500'>{text}</p>
      </div>
    </div>
  )
}

export default Service