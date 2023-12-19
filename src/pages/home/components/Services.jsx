import ServiceImg from '../assets/services-img.png'
import { LuCheckCircle } from "react-icons/lu";
import { homeServices } from '../constants';

const Services = () => {
  return (
    <>
      <div className="bg-gray-100 py-14 px-[20px] md:px-[50px] md:py-[100px] lg:px-[100px]">
        <h2 className="capitalize font-semibold text-3xl md:text-4xl text-center text-gray-800">The cleedenz agency</h2>
        <p className="md:w-[550px] mx-auto text-center leading-7 mt-3">We provide excellent customer support to our clients. we provide hacking , Recovery and spying service .</p>
        <div className="w-[100px] mx-auto h-[2px] bg-sky-300 mt-5" />

        <div className='mt-14 flex flex-col md:flex-row gap-7'>
          <div className='md:w-1/2 h-auto'>
            <img src={ServiceImg} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='md:w-1/2 py-5'>
          <ul className='flex flex-col gap-y-3'>
            {homeServices.map(service => {
              return(
                <li key={service.id} className='flex gap-5 items-start'>
                  <span className='h-fit block mt-1'>
                    <LuCheckCircle className='text-xl' />
                  </span>
                  <span>{service.text}</span>
                </li>
              )
            })}
          </ul>
          <button className='bg-sky-500 hover:bg-sky-600 py-2 px-5 rounded-3xl text-white uppercase font-semibold mt-5'>Contact Us</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services