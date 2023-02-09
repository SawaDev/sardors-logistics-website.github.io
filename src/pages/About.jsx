import React, { useState } from 'react'
import AboutCom from '../components/AboutCom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { BsQuestionCircle, BsChevronDown, BsChevronUp } from "react-icons/bs"
import "./style.css"
import SupportStat from '../components/SupportStat'
import MySwiper from '../components/Testimonials'
import { MdClose } from 'react-icons/md'
import { motion } from "framer-motion"

const Accordion = (props) => {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (index) => {
    setExpanded(index === expanded ? null : index);
  }

  return (
    <motion.div
      whileInView={{ y: [100, 0] }}
      className='w-full flex flex-col gap-2 max-w-6xl mx-auto mb-10 px-2'>
      {props.items.map((item, index) => (
        <div key={index} onClick={() => handleClick(index)} className="w-full bg-slate-100 flex flex-col gap-2 rounded-lg py-5 px-10 cursor-pointer">
          <div className="w-full flex items-center justify-between">
            <div className='flex gap-3 items-center font-semibold text-lg'>
              <div className='text-blue-700 text-lg'>
                <BsQuestionCircle />
              </div>
              <div className={`${index === expanded && "text-blue-700"}`}>
                {item.title}
              </div>
            </div>
            <div className='text-blue-700 text-lg'>
              {index === expanded ? <BsChevronUp /> : <BsChevronDown />}
            </div>
          </div>
          <div className={`transition duration-300 ease-in ${index === expanded ? 'block' : 'hidden'}`}>
            {item.content}
          </div>
        </div>
      ))}
    </motion.div>
  )
}

const items = [
  { title: 'What is the main role of a freight brokerage company?', content: 'A freight brokerage company acts as a liaison between shipping companies and shippers to coordinate the transportation of goods. They help match carriers with available loads and negotiate rates on behalf of their clients.' },
  { title: 'How does a freight brokerage company make money?', content: 'Freight brokerage companies earn a commission on the difference between the rates they negotiate for their clients and the rates they contract with carriers. They typically take a percentage of the total shipment cost as their fee.' },
  { title: 'How does a freight brokerage company ensure the safety and security of shipments?', content: 'Freight brokerage companies work with trusted carriers and have strict standards for the transportation of goods. They also monitor shipments and provide tracking information to clients to ensure the safe and secure delivery of goods. In addition, many companies have insurance options available to protect clients against any losses or damages during transportation.' },
];

const About = () => {
  const [active, setActive] = useState(false);

  const handleChildData = data => {
    console.log("Data received from child:", data);
    setActive(data);
  };

  const handleParentButtonClick = () => {
    setActive(prevActive => !prevActive);
  };
  return (
    <div>
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
      <div className='about pt-28 pb-16 grid place-items-center '>
        <motion.div
          whileInView={{ scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 0.4 }}
          className='flex flex-col items-center'
        >
          <p className='text-6xl font-bold mb-3'>About</p>
          <div className='flex flex-row gap-2 text-lg'>
            <a href="/" className='text-blue-400'>Home</a>
            <p>|</p>
            <a href="/about" className='italic'>About</a>
          </div>
        </motion.div>
      </div>
      <AboutCom onSendData={handleChildData} active={active} />
      <div className='flex gap-4 sm:gap-[100px] lg:gap-[160px] mb-10 w-full justify-center '>
        <SupportStat text="Clients" end={989} />
        <SupportStat text="Projects" end={156} />
        <SupportStat text="Support" end={353} />
        <SupportStat text="Workers" end={524} />
      </div>
      <MySwiper />
      <Header text="questions" />
      <Accordion items={items} />
      <Footer />
    </div>
  )
}

export default About