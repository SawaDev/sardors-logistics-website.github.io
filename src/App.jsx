import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Carriers from './pages/Carriers'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { BiMessage } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import Button from './components/Button'
import Shippers from './pages/Shippers'
import emailjs from "@emailjs/browser"

const App = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [chat, setChat] = useState(false);
  const [menuParent, setMenuParent] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > 70) {
        setIsScrolling(true);
      } else if (currentScrollPosition <= 1) {
        setIsScrolling(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setChat(!chat);
  }

  const handleChildData = (data) => {
    setMenuParent(data);
  };

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
    <BrowserRouter>
      <main className='relative'>
        <div className='fixed top-0 left-0 right-0 z-50'>
          <Navbar isScrolling={isScrolling} onSendData={handleChildData} menuParent={menuParent} />
        </div>
        {chat && (
          <form onSubmit={sendEmail} className='fixed flex flex-col justify-center bottom-[130px] right-10 z-50 gap-5 min-w-[270px] bg-white px-4 py-6 rounded-lg shadow-xl'>
            <span className='text-xl capitalize font-semibold'>Send an email :)</span>
            <input className='border-2 px-3 py-2 rounded-lg' placeholder='Subject' type="text" name="subject" required />
            <input className='border-2 px-3 py-2 rounded-lg' placeholder='Name' type="text" name="name" required />
            <input className='border-2 px-3 py-2 rounded-lg' placeholder='Email' type="email" name='email' required />
            <textarea className='border-2 px-3 py-2 rounded-lg h-24' placeholder='Message' type="text" name='message' required />
            <input type="submit" value="Send Message" className='bg-blue-500 shadow-lg shadow-blue-300 px-4 py-2 text-white text-lg rounded-lg transform ease-in-out duration-200 hover:scale-x-110' />
          </form>
        )}
        {menuParent && (
          <div className='hidden sm:flex fixed z-50 bottom-24 right-[100px]'>
            <div onClick={handleClick} className='grid place-items-center cursor-pointer text-white font-semibold text-2xl h-16 w-16 z-50 play'>
              {chat ? <AiOutlineClose /> : <BiMessage />}
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carriers" element={<Carriers />} />
          <Route path="/shippers" element={<Shippers />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App