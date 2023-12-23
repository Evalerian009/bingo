import { services, servicesStats } from "../constants";


const ServicesList = () => {
  return (
    <div className="py-14 px-[20px] md:px-[50px] md:py-[70px] lg:px-[100px]">
      <div className="text-center md:w-[500px] mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800">Our Services</h2>
        <p className="mt-3">Stay ahead of the curve with our commitment to incorporating the latest technological advancements. Our online services evolve to meet the ever-changing digital landscape, ensuring you always have access to the best solutions. Choose CLEEDENZ for a transformative online experience that combines efficiency, security, and innovation. Join countless satisfied users who have made us their trusted partner for all things digital. Explore our services today and unlock a world of possibilities at your fingertips. .</p>
      </div>
      <div className="w-[100px] mx-auto h-[2px] bg-gray-300 mt-5" />

      <div className="mt-10 flex flex-col md:flex-row flex-wrap">
        {services.map(service => {
          const Icon = service.icon
          return(  
          <div key={service.header} className={`w-full md:w-1/2 lg:w-1/3 ${service.bg} ${service.textCol} py-10 px-6 text-center`}>
            <div className="w-fit mx-auto text-6xl">
              <Icon />
            </div>
            <h3 className="mt-6 text-xl font-bold">{service.header}</h3>
            <p className="mt-3 font-[300]">{service.text}</p>
          </div>
        )})}
      </div>

      <div className="text-center md:w-[500px] mx-auto mt-7 md:mt-[70px]">
        <h2 className="text-4xl font-semibold text-gray-800">Our Skills</h2>
        <p className="mt-3">Ratings from our clients play a crucial role in our personal and professional development, influencing our success, satisfaction, and overall quality of life and work. Nurturing our skills is a lifelong journey, and it&apos;s essential to understand the importance of this ongoing process as we serve you.</p>
      </div>
      <div className="w-[100px] mx-auto h-[2px] bg-gray-300 mt-5" />

      <div className="mt-[70px] flex flex-col md:flex-row justify-between items-center gap-y-7">
        <div className="md:w-[45%]">
          <h3 className="text-4xl font-semibold text-gray-800">Simple to Start</h3>
          <p className="mt-3">We often find ourselves overwhelmed by the complexities and uncertainties that lie ahead. However, embracing simplicity can be the key to overcoming this initial inertia and taking the first step towards solving your problem we made each step simple for you our clients lets help you solve your problem.</p>
          <button className="bg-sky-500 rounded-2xl text-white uppercase py-2 px-7 text-[14px] mt-6">Contact us</button>
        </div>
        <div className="w-full md:w-[45%] flex flex-col gap-3">
          {servicesStats.map(stat => ((
            <div key={stat.title}>
              <h4 className="text-[15px] text-gray-700">{stat.title}</h4>
              <p className="mt-1 w-full bg-gray-200 h-3 rounded-sm overflow-hidden">
                <span className={`block ${stat.progress} h-full bg-sky-500`}></span>
              </p>
            </div>
          )))}
        </div>
      </div>
    </div>
  )
}

export default ServicesList