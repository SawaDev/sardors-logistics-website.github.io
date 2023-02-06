import React, { useState } from 'react'
import AboutCom from '../components/AboutCom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { BsQuestionCircle, BsChevronDown, BsChevronUp } from "react-icons/bs"
import "./style.css"
import SupportStat from '../components/SupportStat'
import MySwiper from '../components/Testimonials'

const Accordion = (props) => {
  const [expanded, setExpanded] = useState(null);

  const handleClick = (index) => {
    setExpanded(index === expanded ? null : index);
  }

  return (
    <div className='w-full flex flex-col gap-2 max-w-6xl mx-auto mb-10'>
      {props.items.map((item, index) => (
        <div key={index} onClick={() => handleClick(index)} className="w-full bg-slate-100 flex flex-col gap-2 rounded-lg py-5 px-10 cursor-pointer">
          <div className="w-full flex items-center justify-between">
            <div className='flex gap-3 items-center font-bold text-lg'>
              <div className='text-blue-700 text-lg'>
                <BsQuestionCircle />
              </div>
              <div className={`${index === expanded ? "text-blue-700" : ""}`}>
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
    </div>
  )
}

const items = [
  { title: 'Title 1', content: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' },
  { title: 'Title 2', content: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' },
  { title: 'Title 3', content: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' },
];

const About = () => {
  return (
    <div>
      <div className='about pt-28 pb-16 grid place-items-center '>
        <p className='text-6xl font-bold mb-3'>About</p>
        <div className='flex flex-row gap-2 text-lg'>
          <a href="/" className='text-blue-400'>Home</a>
          <p>|</p>
          <a href="/about" className='italic'>About</a>
        </div>
      </div>
      <AboutCom />
      <div className='flex gap-[160px] mb-10 w-full justify-center '>
        <SupportStat text="Clients" end={989} />
        <SupportStat text="Projects" end={156} />
        <SupportStat text="Support" end={353} />
        <SupportStat text="Workers" end={524} />
      </div>
      <MySwiper />
      <Header text="Frequently asked questions" />
      <Accordion items={items} />
      <Footer />
    </div>
  )
}

export default About