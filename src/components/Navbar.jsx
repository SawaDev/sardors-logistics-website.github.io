import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from "./Button"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdClose } from 'react-icons/md'

const Navbar = ({ isScrolling, onSendData, menuParent }) => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
    onSendData(!menuParent);
  }

  const handleLinks = () => {
    setMenu(false);
    onSendData(true);
  }

  return (
    <nav className={`${isScrolling ? 'navbar' : 'navbarBefore'}  w-full flex justify-between items-center sm:px-8 lg:px-20 px-4 text-white`}>
      <Link to="/">
        <span className='text-2xl font-extrabold hover:text-blue-500'>Logo</span>
      </Link>
      <div className='sm:hidden text-xl mr-4'>
        <GiHamburgerMenu onClick={handleClick} />
        {menu && (
          <div className='navSmall fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center bg-[#0E1D34] z-50 slide-bottom'>
            <div className='fixed text-3xl top-8 right-8' onClick={handleClick}>
              <MdClose />
            </div>
            <ul className='flex flex-col gap-6'>
              <li>
                <Link to="/" className='item text-xl font-semibold' onClick={handleLinks}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/carriers" className='item text-xl font-semibold' onClick={handleLinks}>
                  Carriers
                </Link>
              </li>
              <li>
                <Link to="/about" className='item text-xl font-semibold' onClick={handleLinks}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/shippers" className='item text-xl font-semibold' onClick={handleLinks}>
                  Shippers
                </Link>
              </li>
              <li>
                <Link to="/contact" className='item text-xl font-semibold' onClick={handleLinks}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <ul className='hidden sm:flex flex-row gap-6'>
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
      <div className='hidden sm:block'>
        <Link to="/contact">
          <Button text="Contact Us" shadow={false} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar