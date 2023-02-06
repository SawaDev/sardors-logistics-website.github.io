import React from 'react'
import { MdClose } from "react-icons/md"
const Video = ({ home, shippers, active }) => {

  const handleChildButtonClick = ({active}) => {
    onSendData(!active);
  };

  return (
    <div className='video'>
      <div className='flex flex-col items-end'>
        <div onClick={handleChildButtonClick} className='text-blue-400 bg-white px-4 py-1 text-3xl font-bold rounded-2xl mb-5 w-fit cursor-pointer'>
          <MdClose />
        </div>
        <iframe className='youtubeVideo' src="https://www.youtube-nocookie.com/embed/2V-2ABkUREE?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
    </div>
  )
}

export default Video