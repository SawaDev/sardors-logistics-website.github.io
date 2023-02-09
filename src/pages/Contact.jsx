import React from 'react'
import { SlLocationPin } from "react-icons/sl"
import { TfiEmail } from "react-icons/tfi"
import { BsPhone } from "react-icons/bs"
import Footer from '../components/Footer'
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_v0ljzca', 'template_hd7lh6u', e.target, 'VWuLU3mf46Ek5FS8L')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div>
      <div className='contact pt-28 pb-16 grid place-items-center '>
        <motion.div
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.4 }}
          className='flex flex-col items-center'
        >
          <p className='text-6xl font-bold mb-3'>Contact</p>
          <div className='flex flex-row gap-2 text-lg'>
            <a href="/" className='text-blue-400'>Home</a>
            <p>|</p>
            <a href="/contact" className='italic'>Contact</a>
          </div>
        </motion.div>
      </div>
      <div className='flex flex-col-reverse lg:flex-row max-w-7xl mx-auto mt-10 px-4 sm:px-10 xl:px-0'>
        <div className='lg:w-1/3 flex lg:flex-col flex-wrap mt-8 gap-8'>
          <div className='flex gap-3 items-center justify-start'>
            <div className='bg-blue-600 p-3 text-lg text-white rounded-md'>
              <SlLocationPin />
            </div>
            <div>
              <span className='text-xl font-semibold'>Location: </span>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>
          <div className='flex gap-3 items-center justify-start'>
            <div className='bg-blue-600 p-3 text-lg text-white rounded-md'>
              <TfiEmail />
            </div>
            <div className='flex flex-col'>
              <span className='text-xl font-semibold'>Email: </span>
              <a href='mailto:sardormahmudov16@gmail.com'>sardormahmudov16@gmail.com</a>
            </div>
          </div>
          <div className='flex gap-3 items-center justify-start'>
            <div className='bg-blue-600 p-3 text-lg text-white rounded-md'>
              <BsPhone />
            </div>
            <div className='flex flex-col'>
              <span className='text-xl font-semibold'>Phone: </span>
              <a href="tel:+998957902108">+998123456789</a>
            </div>
          </div>
        </div>
        <form onSubmit={sendEmail} className='lg:w-2/3 flex flex-col gap-4 '>
          <div className='flex flex-col sm:flex-row gap-4 w-full'>
            <input className='border-2 w-full rounded-md outline-none focus:border-2 px-4 py-3' placeholder='Your Name' type="text" name="name" required />
            <input className='border-2 w-full rounded-md outline-none focus:border-2 px-4 py-3' placeholder='Your Email' type="email" name='email' required />
          </div>
          <div>
            <input className='border-2 w-full rounded-md outline-none focus:border-2 px-4 py-3' placeholder='Subject' type="text" name='subject' required />
          </div>
          <div>
            <textarea className='border-2 w-full rounded-md h-28 resize-none outline-none focus:border-2 px-4 py-3' placeholder='Message' type="text" name='message' required />
          </div>
          <div className='flex justify-center'>
            <input type="submit" value="Send Message" className='bg-blue-500 shadow-lg shadow-blue-300 px-4 py-2 text-white text-lg rounded-lg transform ease-in-out duration-200 hover:scale-x-110' />
          </div>
        </form>
      </div>
      <div className='flex items-center w-full py-20 px-3 sm:px-10 xl:px-0 max-w-7xl mx-auto overflow-hidden'>
        <div className='w-full'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.48570970425!2d-90.38354599091453!3d38.65301691895385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8b4a9faed8ef9%3A0xbe39eaca22bbe05b!2z0KHQtdC90YIt0JvRg9C40YEsINCc0LjRgdGB0YPRgNC4LCDQodCo0JA!5e0!3m2!1sru!2scz!4v1674849261763!5m2!1sru!2sen" className='map'></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact