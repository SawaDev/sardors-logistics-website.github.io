import React, { useState } from 'react'
import Button from './Button'
import aboutImg from "../assets/about.jpg"
import { BsFillPlayFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import "./style.css"
import { motion } from "framer-motion"

const AboutCom = ({ active, onSendData }) => {
  const handleChildButtonClick = () => {
    onSendData(!active);
  };

  return (
    <div className='flex flex-col lg:flex-row gap-5 max-w-7xl mx-auto px-5 py-10 sm:py-20 sm:px-20 headSection'>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='lg:w-1/2 flex flex-col justify-center items-start'
      >
        <span className='text-lg text-blue-600 font-semibold sm:text-xl'>About Us</span>
        <span className='text-4xl font-bold mt-2 mb-6 sm:text-5xl'>Trusted & Faster Logistic Service Provider</span>
        <p className='text-gray-500 mb-6'>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
        <Link to="/about">
          <Button text="Learn More" icon={true} shadow={true} />
        </Link>
      </motion.div>
      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='lg:w-1/2 shadow-lg shadow-blue-500/75'
      >
        <div className='relative'>
          <img src={aboutImg} className="object-cover -z-10" />
          <div className='absolute inset-0 flex items-center justify-center z-10'>
            <div onClick={handleChildButtonClick} className='play grid place-items-center text-white cursor-pointer'>
              <BsFillPlayFill />
            </div>
          </div>
        </div>
        <div className='flex justify-center py-3 bg-blue-600 text-white text-3xl font-semibold'>3+ Years Experience</div>
      </motion.div>
    </div>
  )
}

export default AboutCom