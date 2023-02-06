import React from 'react'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa"

const Footer = () => {

  return (
    <div className='footer text-white px-6 sm:px-0 w-full'>
      <div className='max-w-7xl mx-auto flex justify-center w-fit gap-16' >
        <div className='flex flex-col gap-2 py-6 flex-1'>
          <h1 className='text-xl font-extrabold'>Brand</h1>
          <p className='text-gray-300 mb-3'>Efficient Freight Solutions for Your Business - Trust Our Expertise in  Brokerage and Logistics</p>
          <div className='icons flex gap-2'>
            <div className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
              <FaFacebookF />
            </div>
            <div className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
              <FaInstagram />
            </div>
            <div className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
              <FaTelegramPlane />
            </div>
            <div className='p-2 text-lg border-2 rounded-full opacity-70 hover:opacity-100 shadow-sm hover:shadow-white '>
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className='flex flex-col py-6 flex-1 gap-1'>
          <h1 className='font-semibold text-lg'>Useful Links</h1>
          <p className='italic cursor-pointer ease-in duration-100 hover:pl-1'>Home</p>
          <p className='italic cursor-pointer ease-in duration-100 hover:pl-1'>About</p>
          <p className='italic cursor-pointer ease-in duration-100 hover:pl-1'>Shippers</p>
          <p className='italic cursor-pointer ease-in duration-100 hover:pl-1'>Carriers</p>
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
            <p className='font-semibold  '>Phone: <a className='font-light hover:text-gray-300'>+998991234567</a></p>
            <p className='font-semibold  '>Email: <a className='font-light hover:text-gray-300'>mail@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer