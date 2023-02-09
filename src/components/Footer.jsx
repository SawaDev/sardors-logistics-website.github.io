import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <div className='footer text-white px-6 sm:px-0 w-full'>
      <div className='footerContainer max-w-7xl mx-4 sm:mx-8 xl:mx-auto lg:gap-16' >
        <div className='flex flex-col justify-around gap-2 py-6'>
          <h1 className='text-xl font-extrabold'>Brand</h1>
          <p className='text-gray-300 mb-3'>Efficient Freight Solutions for <br />Your Business - Trust Our<br /> Expertise in  Brokerage and Logistics</p>
          <div className='icons flex gap-2'>
            <a className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
              <FaFacebookF />
            </a>
            <a href='https://www.instagram.com/sardor_isme/' className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
              <FaInstagram />
            </a>
            <a href="https://telegram.me/otaSmurf_1" className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
              <FaTelegramPlane />
            </a>
            <a className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className='flex flex-col py-6 flex-1 gap-1'>
          <h1 className='font-semibold text-lg'>Useful Links</h1>
          <Link to="/">
            <p className='italic cursor-pointer ease-in duration-100 hover:pl-1'>Home</p>
          </Link>
          <Link to="/about">
            <p className='italic cursor-pointer ease-in duration-100 hover:pl-1'>About</p>
          </Link>
          <Link to="/shippers">
            <p className='italic cursor-pointer ease-in duration-100 hover:pl-1'>Shippers</p>
          </Link>
          <Link to="/carriers">
            <p className='italic cursor-pointer ease-in duration-100 hover:pl-1'>Carriers</p>
          </Link>
          <Link to="/contact">
            <p className='italic cursor-pointer ease-in duration-100 hover:pl-1'>Contact Us</p>
          </Link>
        </div>
        <div className='py-6 flex-1 flex flex-col gap-2'>
          <h1 className='font-semibold text-lg'>Contact Us</h1>
          <div>
            <p className='capitalize text-sm text-gray-300'>
              Shaykhontokhur region<br />
              Adiblar-3 street<br />
              34-Home<br />
            </p>
          </div>
          <div>
            <p className='font-semibold'>Phone: <a href="tel:+998957902108" className='font-light hover:text-gray-300'>+998957902108</a></p>
            <p className='font-semibold'>Email: <a href="mailto:sardormahmudov16@gmail.com" className='font-light hover:text-gray-300'>sardormahmudov16@gmail</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer