import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from "./Button"

const Navbar = ({ isScrolling }) => {

  return (
    <nav className={`${isScrolling ? 'navbar' : 'navbarBefore'}  w-full flex justify-between items-center sm:px-8 lg:px-20 px-4 text-white`}>
      <Link to="/">
        <span className='text-2xl font-extrabold hover:text-blue-500'>Logo</span>
      </Link>
      <ul className='flex flex-row gap-6'>
        <li className='item text-xl'>
          <Link to="/carriers">
            Carriers
          </Link>
        </li>
        <li>
          <Link to="/about" className='item text-xl'>
            About
          </Link>
        </li>
        <li>
          <Link to="/shippers" className='item text-xl'>
            Shippers
          </Link>
        </li>
      </ul>
      <Link to="/contact">
        <Button text="Contact Us" shadow={false} />
      </Link>
    </nav>
  )
}

export default Navbar