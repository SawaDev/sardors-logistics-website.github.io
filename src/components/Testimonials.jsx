import { useEffect } from "react";
import Swiper from "swiper"
import "swiper/css";
import { MdFormatQuote } from "react-icons/md"
import { testimonial1, testimonial2, testimonial3, testimonial4 } from "../assets/index"
import "./style.css";
import { motion } from "framer-motion"

const MySwiper = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      spaceBetween: 20,
      slidesPerView: "auto",
      loop: true,
      centeredSlides: true,
      fade: true,
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        590: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        910: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    });
  }, []);

  return (
    <motion.div
      whileInView={{ y: [80, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="swiper-container max-w-7xl mx-auto px-6 xl:px-0 mb-12 overflow-hidden">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className='relative rounded-sm bg-gray-100 p-6'>
            <MdFormatQuote className='text-8xl absolute text-gray-300 -top-7 -right-5' />
            <div className='flex items-center mb-3'>
              <div className='h-14'>
                <img className='rounded-full' src={testimonial1} />
              </div>
              <div className='ml-3 flex flex-col items-start'>
                <h6 className='font-semibold text-blue-600'>Alexander Kim</h6>
                <small className='text-gray-400 capitalize'>Supply chain manager</small>
              </div>
            </div>
            <p className='text-left text-gray-500'>The freight brokerage company has consistently provided us with efficient and cost-effective shipping solutions, making our supply chain run smoothly</p>
          </div>
        </div>
        <div className="swiper-slide">
          <div className='relative rounded-sm bg-gray-100 p-6'>
            <MdFormatQuote className='text-8xl absolute text-gray-300 -top-7 -right-5' />
            <div className='flex items-center mb-3'>
              <div className='h-14'>
                <img className='rounded-full' src={testimonial2} />
              </div>
              <div className='ml-3 flex flex-col items-start'>
                <h6 className='font-semibold text-blue-600'>Benjamin Davis</h6>
                <small className='text-gray-400 capitalize'>Logistics coordinator</small>
              </div>
            </div>
            <p className='text-left text-gray-500'>The team at the freight brokerage company is knowledgeable and proactive, ensuring our deliveries always arrive on time and in perfect condition</p>
          </div>
        </div>
        <div className="swiper-slide">
          <div className='relative rounded-sm bg-gray-100 p-6'>
            <MdFormatQuote className='text-8xl absolute text-gray-300 -top-7 -right-5' />
            <div className='flex items-center mb-3'>
              <div className='h-14'>
                <img className='rounded-full' src={testimonial3} />
              </div>
              <div className='ml-3 flex flex-col items-start'>
                <h6 className='font-semibold text-blue-600'>Adam Wilson</h6>
                <small className='text-gray-400 capitalize'>Transportation manager</small>
              </div>
            </div>
            <p className='text-left text-gray-500'>I have been thoroughly impressed with the level of customer service and expertise provided by the freight brokerage company, making the transportation process seamless for my business</p>
          </div>
        </div>
        <div className="swiper-slide">
          <div className='relative rounded-sm bg-gray-100 p-6'>
            <MdFormatQuote className='text-8xl absolute text-gray-300 -top-7 -right-5' />
            <div className='flex items-center mb-3'>
              <div className='h-14'>
                <img className='rounded-full' src={testimonial4} />
              </div>
              <div className='ml-3 flex flex-col items-start'>
                <h6 className='font-semibold text-blue-600'>David Lee</h6>
                <small className='text-gray-400 capitalize'>Logistics coordinator</small>
              </div>
            </div>
            <p className='text-left text-gray-500'>Their extensive network of carriers and attention to detail have made the import/export process effortless and stress-free, allowing me to focus on growing my business</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default MySwiper