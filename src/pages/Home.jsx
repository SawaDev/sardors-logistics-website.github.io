import "./style.css"
import React, { useState } from 'react'
import AboutCom from '../components/AboutCom';
import Header from '../components/Header';
import Service from '../components/Service';
import { MdCall, MdClose } from "react-icons/md"
import { service1, service4, service5, heroImg } from '../assets/index'
import MySwiper from "../components/Testimonials";
import Footer from "../components/Footer";
import SupportStat from "../components/SupportStat";
import { motion } from "framer-motion"

const Home = () => {
  const [active, setActive] = useState(false);

  const handleChildData = data => {
    setActive(data);
  };

  const handleParentButtonClick = () => {
    setActive(prevActive => !prevActive);
  };

  return (
    <div className="overflow-hidden">
      {active && (
        <div className="fixed top-0 left-0 right-0 z-40">
          <div className='video'>
            <div className='flex flex-col items-end'>
              <div onClick={handleParentButtonClick} className='text-blue-400 bg-white px-4 py-1 text-3xl font-bold rounded-2xl mb-5 w-fit cursor-pointer'>
                <MdClose />
              </div>
              <iframe className='youtubeVideo' src="https://www.youtube-nocookie.com/embed/2V-2ABkUREE?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      )}
      <div className="banner w-full">
        <div className='flex flex-col-reverse gap-20 max-w-7xl mx-auto pt-[120px] pb-[60px] px-[20px] lg:flex-row sm:px-20'>
          <motion.div
            whileInView={{ x: [-100, 0] }}
            transition={{ duration: 0.5 }}
            className='flex-1 flex flex-col'
          >
            <span className='text-5xl font-bold mb-5'>
              Your Lightning Fast Delivery Partner
            </span>
            <span className='mb-10 text-[15px]'>
              Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit
            </span>
            <div className='flex gap-3 sm:gap-5'>
              <SupportStat text="Clients" end={989} />
              <SupportStat text="Projects" end={156} />
              <SupportStat text="Support" end={353} />
              <SupportStat text="Workers" end={524} />
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x: [100, 0] }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex-1'>
            <img src={heroImg} />
          </motion.div>
        </div>
      </div>
      <AboutCom onSendData={handleChildData} active={active} />
      <Header text="Our Services" />
      <div className='mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-5'>
        <Service imgUrl={service1} title="Maintenance" text="We can set up and maintain your business's network, or help troubleshoot and maintain your existing network. " />
        <Service imgUrl={service5} title="Efficiency" text="We are available to consult with you or your staff when problems arise with your software. We are available for remote or on-site assistance." />
        <Service imgUrl={service4} title="Personalized Service" text="We're dedicated to ensuring your satisfaction. Our team will keep you informed every step of the way for a seamless shipping experience." />
      </div>
      <Header text="testimonials" />
      <MySwiper />
      <div className="callUs">
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.4 }}
          className="max-w-7xl mx-auto text-white px-10 sm:px-0 flex justify-center flex-col items-center">
          <h2 className="text-3xl font-semibold">Call Us</h2>
          <p className="py-8 text-center">Don't hesitate to reach out to us with any questions or concerns. Our dedicated customer service team is available<br /> to assist you 24/7, and we will always be happy to provide you with the help you need</p>
          <a href="tel:+998957902108" className="text-lg px-5 py-3 cursor-pointer border-2 rounded ease-in-out duration-200 hover:border-blue-600 hover:bg-blue-600">Call Now <MdCall className="inline-block ml-2" /> </a>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default Home