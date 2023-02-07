import React, { useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { shippers_2 } from '../assets/index'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion } from "framer-motion"

const Shippers = () => {
  const [active, setActive] = useState(false)

  return (
    <div className='overflow-hidden'>
      {active && (
        <div className="fixed top-0 left-0 right-0 z-40">
          <div className='video'>
            <div className='flex flex-col items-end'>
              <div onClick={() => setActive(!active)} className='text-blue-400 bg-white px-4 py-1 text-3xl font-bold rounded-2xl mb-5 w-fit cursor-pointer'>
                <MdClose />
              </div>
              <iframe className='youtubeVideo' src="https://www.youtube-nocookie.com/embed/2V-2ABkUREE?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      )}
      <div className='carriers pt-28 pb-16 grid place-items-center px-2'>
        <motion.div
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.4 }}
        >
          <p className='text-center text-4xl sm:text-6xl font-bold mb-6 mt-6'>Flexible <span className='text-blue-500'>Multimodal</span> Solutions</p>
          <p className='text-center max-w-3xl mx-auto text-lg text-gray-300 mb-10'>Multimodal solutions from proven carriers at compelling rates is just the beginning. Partnering with Arrive gives you access to efficiency-enhancing technology, strategic guidance, around-the-clock support, and real-time market data.</p>
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
          <a href="/shippers" className='italic'>Shippers</a>
        </motion.section>
      </div>
      <section className='my-12 flex flex-col lg:flex-row gap-8'>
        <motion.div
          whileInView={{ y: [100, 0] }}
          transition={{ duration: 0.5 }}
          className='lg:w-1/2 flex flex-col justify-center gap-7'>
          <p className='text-4xl sm:text-5xl font-semibold text-blue-600'>Technology Solutions, Delivered by People</p>
          <p className='text-lg'>BREND was built by experts so you don’t have to be. This suite of digital solutions empowers our team to deliver competitive rates, enhanced efficiency, and best-in-class transparency. That means more value and fewer problems.</p>
          <Button text="Contact Us" icon={true} shadow={true} />
        </motion.div>
        <motion.div
          whileInView={{ y: [100, 0] }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='lg:w-1/2'>
          <div className='relative'>
            <img src={shippers_2} className="object-cover -z-10 rounded-xl" />
            <div className='absolute inset-0 flex items-center justify-center z-10'>
              <div onClick={() => setActive(!active)} className='play grid place-items-center text-white cursor-pointer'>
                <BsFillPlayFill />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <Header text="features" />
      <section className='flex flex-col lg:flex-row-reverse mt-4 sm:mt-10 p-2 gap-5 sm:gap-10'>
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='lg:w-2/5 flex flex-col justify-center gap-3 sm:gap-7'>
          <h1 className='text-[40px] sm:text-5xl font-semibold text-blue-600'>Strategic Core Capacity</h1>
          <p className='text-lg'>You need consistent capacity at reasonable rates in any market. By aligning with our core carrier network of midsized fleets to build density around your preferred lanes, we scale and adapt our services to ensure you’re covered.</p>
        </motion.div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-3/5 h-full object-cover min-h-[300px] lg:min-h-[460px] shadow-2xl imgBack img3'>
        </motion.div>
      </section>
      <section className='flex flex-col lg:flex-row mt-10 mb-10 p-2 gap-5 sm:gap-10'>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='lg:w-2/5 flex flex-col justify-center gap-3 sm:gap-7'>
          <h1 className='text-[40px] sm:text-5xl font-semibold text-blue-600'>Flexible Solutions</h1>
          <p className='text-lg'>A vast network of carriers, tractors, and trailers available on demand across the country keeps us nimble enough to efficiently and effectively respond to your needs as they change.</p>
        </motion.div>
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-3/5 h-full object-cover min-h-[300px] lg:min-h-[460px] shadow-2xl imgBack img4'>
        </motion.div>
      </section>
      <Footer />
    </div>
  )
}

export default Shippers