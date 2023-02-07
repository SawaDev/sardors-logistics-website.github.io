import React from 'react'
import { MdCall } from "react-icons/md"
import Footer from "../components/Footer"
import { motion } from "framer-motion"

const Carriers = () => {
  return (
    <div className='bg-[#f7faff] overflow-hidden'>
      <div className='carriers pt-28 pb-16 grid place-items-center '>
        <motion.div
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.4 }}
        >
          <p className='text-center text-6xl font-bold mb-3'>Carriers</p>
          <p className='text-center max-w-3xl mx-auto text-lg text-gray-300 mb-10 px-3'>From technology that makes it easy to do business your way to a team that will support you along the journey, we are committed to building carrier partnerships that last. Join one of the largest domestic carrier networks today!</p>
        </motion.div>
      </div>
      <div className='bg-[#e3edff]'>
        <motion.section
          whileInView={{ x: [250, 0] }}
          transition={{ duration: 0.4 }}
          className='flex flex-row gap-2 text-lg py-4 px-3 sm:px-0'
        >
          <a href="/" className='text-blue-500'>Home</a>
          <p>|</p>
          <a href="/carriers" className='italic'>Carriers</a>
        </motion.section>
      </div>
      <section className='flex flex-col lg:flex-row mt-10 p-2 gap-10'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='lg:w-2/5 flex flex-col justify-center gap-3 sm:gap-7'>
          <h1 className='text-[40px] sm:text-5xl font-semibold text-blue-600'>Get Consistent Revenue</h1>
          <p className='text-lg'>With more than 6,000 shippers in core markets nationwide, we have the lane density to offer you steady freight volume regardless of market conditions.</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-3/5 h-full object-cover min-h-[300px] lg:min-h-[460px] shadow-2xl imgBack img1'>
        </motion.div>
      </section>
      <section className='flex flex-col lg:flex-row-reverse mt-8 p-2 gap-10 mb-10'>
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='lg:w-2/5 flex flex-col justify-center gap-3 sm:gap-7'>
          <h1 className='text-[40px] sm:text-5xl font-semibold text-blue-600'>Stress-Free Payment</h1>
          <p className='text-lg'>Getting paid should not be extra work. Opt to receive your payment within a 30-day term or in as little as 48 hours with our 2-Day Quick Pay terms, available for a 2% fee.</p>
        </motion.div>
        <motion.div
          whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-3/5 h-full object-cover min-h-[300px] lg:min-h-[460px] shadow-2xl imgBack img2'>
        </motion.div>
      </section>
      <div className="callUs">
        <div className="max-w-7xl mx-auto text-white px-10 sm:px-0 flex justify-center flex-col items-center">
          <h2 className="text-3xl font-semibold">Call Us</h2>
          <p className="py-8 text-center">Don't hesitate to reach out to us with any questions or concerns. Our dedicated customer service team is available<br /> to assist you 24/7, and we will always be happy to provide you with the help you need</p>
          <a className="text-lg px-5 py-3 cursor-pointer border-2 rounded ease-in-out duration-200 hover:border-blue-600 hover:bg-blue-600">Call Now <MdCall className="inline-block ml-2" /> </a>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Carriers