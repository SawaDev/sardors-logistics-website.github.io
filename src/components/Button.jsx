import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi"
import { Link } from "react-router-dom"

const Button = ({ text, icon, shadow }) => {
  return (
    <div>
      <button className={`bg-blue-500 ${shadow ? "shadow-lg shadow-blue-300" : ""} px-4 py-2 text-white text-lg rounded-lg transform ease-in-out duration-200 hover:scale-x-110`}>
        {text} <BiRightArrowAlt className={`${icon ? "inline-block" : "hidden"} ml-2 text-xl`} />
      </button>
    </div>
  )
}

export default Button