import Header from "../../components/Header"
import Img1 from './assets/abt-img-1.jpg' 
import Img2 from './assets/abt-img-2.png' 
import Img3 from './assets/abt-img-3.jpg' 
import Stats from "../home/components/Stats"
import Banner from "../home/components/Banner"

const About = () => {
  return (
    <>
    <Header />

    <div className="py-14 px-[20px] md:px-[50px] md:py-[70px] lg:px-[100px] flex flex-col gap-y-12 lg:flex-row lg:items-center text-gray-800">
      <div className="lg:w-1/2 lg:pr-14 flex flex-col gap-5 text-[20px]">
        <h2 className="text-4xl text-gray-800 font-bold md:w-[350px] uppercase">THE CLEEDENZ AGENCY</h2>
        <p>our expertise is programming, running exploits, setting up DDOS attacks and we like the challenge of doing things where most others give up.</p>
        <p>we can recover and hack account passwords of most social networks easily, remote control smartphones, and most other things that are useful because we spent years to find methods that really work.</p>
        <p>Here on the website you will find list of our services, if it is not listed, then minimum price will be $600 and we will discuss the final price once you give the agency all information and we accept the job and to do this click on the chat support icon to speak to our Agents.</p>
      </div>
      <div className="lg:w-1/2">
        <img src={Img1} alt="" className="w-full h-full object-cover" />
      </div>
    </div>

    <div className="py-14 px-[20px] md:px-[50px] md:py-[70px] lg:px-[100px] flex flex-col md:flex-row gap-10">
      <div className="w-full lg:w-[48%] flex flex-col gap-5">
      <h2 className="text-4xl text-gray-800 font-bold md:w-[350px] capitalize">Our Mission</h2>
      <p className="md:h-[255px] lg:h-[180px]">Our mission is to safeguard privacy of our clients by providing cutting-edge cybersecurity solutions, hacking , recovery, spying services and other expertise. We are committed to delivering exceptional security services that enable individuals and organizations to thrive in a secure digital environment . Through continuous innovation, collaboration, and ethical practices, we strive to be a trusted partner in defending against cyber threats, ensuring the confidentiality, integrity, and availability of critical information.</p>
      <img src={Img2} alt="" className="w-full" />
      </div>
      <div className="w-full lg:w-[48%] flex flex-col gap-5">
        <h2 className="text-4xl text-gray-800 font-bold md:w-[350px] capitalize">Our Vision</h2>
        <p className="md:h-[255px] lg:h-[180px]">Our vision is to be a global leader in cybersecurity, setting the standard for excellence and innovation in safeguarding the digital world. We envision a future where individuals, businesses, and organizations can operate securely in the digital realm, free from the constant threat of cyberattacks. By pioneering new technologies, fostering collaboration, and promoting cyber resilience, we aim to create a safer and more secure digital environment for all. we create safe world for everyone</p>
        <img src={Img3} alt="" className="w-full" />
      </div>
    </div>

    <Stats />
    <Banner />

    </>
  )
}

export default About