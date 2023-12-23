import Header from '../../components/Header'

import { IoIosHome } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdGlobe } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import MapPlaceholder from './assets/map.png'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { motion } from 'framer-motion';

const Contact = ({ animation }) => {
  return (
    <motion.div
      variants={ animation }
      initial = 'initial'
      animate = 'final'
      transition={{duration: 0.6}}
    >
      <Navbar />
      <Header />

      <div className="py-14 px-[20px] md:px-[50px] md:py-[70px] lg:px-[100px]">
        <div className="text-center md:w-[500px] mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800">Get In Touch</h2>
          <p className="mt-3">In today&apos;s digital age, getting in touch with people, organizations, or information has never been easier wey&apos;ve made it easier for you our clients to contact us as we are available 24/7. For emergency or intant response and request please use the chat support to contact us as we will have our agents attend to your requests immediately.</p>
        </div>
        <div className="w-[100px] mx-auto h-[2px] bg-gray-300 mt-5" />

        <div className="mt-[70px] flex flex-col md:flex-row justify-between gap-y-7">
        <div className="md:w-[45%]">
          <h3 className="text-4xl font-semibold text-gray-800">Contact Details</h3>
          <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vero, provident, eum eligendi blanditiis ex explicabo vitae nostrum facilis asperiores dolorem illo officiis ratione vel fugiat dicta laboriosam labore adipisci.</p>
          <div className='mt-7 text-gray-800 flex flex-col gap-3'>
            <p className='flex items- gap-1'>
              <IoIosHome className='text-lg' />
              <span>42nd street ordway, ordway colorado.</span>
            </p>
            <p className='flex items- gap-1'>
              <IoIosPhonePortrait className='text-lg' />
              <span>Phone: +1 801 413 7852</span>
            </p>
            <p className='flex items- gap-1'>
              <IoMdGlobe className='text-lg' />
              <span>Text: +1 801 413 7852</span>
            </p>
            <p className='flex items- gap-1'>
              <MdEmail className='text-lg' />
              <span>Email: officialcleedenz@gmail.com</span>
            </p>
          </div>
        </div>

        <form className="w-full md:w-[48%] flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="text-[15px] border-[1px] border-[#00000038] focus:border-[#00000038] focus:ring-0 hover:border-sky-500 transition-border duration-200" />
          <input type="email" placeholder="Your Email" className="text-[15px] border-[1px] border-[#00000038] focus:border-[#00000038] focus:ring-0 hover:border-sky-500 transition-border duration-200" />
          <input type="text" placeholder="Subject" className="text-[15px] border-[1px] border-[#00000038] focus:border-[#00000038] focus:ring-0 hover:border-sky-500 transition-border duration-200" />
          <textarea type="text" placeholder="Your Name" className="text-[15px] border-[1px] border-[#00000038] focus:border-[#00000038] focus:ring-0 hover:border-sky-500 transition-border duration-200 resize-none" rows={4} />
          <button className='bg-sky-500 hover:bg-sky-600 py-3 text-white text-[14px] uppercase'>Submit</button>
        </form>
      </div>
      </div>

      <div className='w-full h-[250px] md:h-[300px] lg:h-[350px] flex- items-center justify-center'>
        <iframe style={{backgroundImage: `url(${MapPlaceholder})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" frameBorder={0} tabIndex={0} />
      </div>
      <Footer />
    </motion.div>
  )
}

export default Contact