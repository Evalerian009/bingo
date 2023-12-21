import { useState, useEffect } from 'react'
import { HiMiniBars3 } from "react-icons/hi2";
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const [ scroll, setScroll ] = useState(false)
  const [ menu, setMenu ] = useState(false)

  const checkScroll = () => ((
    window.scrollY >= 80 ? setScroll(true) : setScroll(false)
  )) 

  useEffect(() => {
    checkScroll()
    window.addEventListener("scroll", checkScroll)
  })

  const handleMenu = () => ((
    setMenu(!menu)
  ))


  // console.log(window.scrollY)
  // console.log(scroll)

  return (
    <>
      <nav id='nav' className={`fixed z-[1] w-full left-0 top-0 flex justify-between items-baseline px-[20px] md:px-[50px] lg:px-[120px] py-7 bg-white ${!scroll ? 'lg:bg-transparent lg:shadow-0' : 'lg:shadow-2xl'} transition-all duration-500`}>
        <Link to="/" className="uppercase text-2xl lg:text-2xl text-black lg:text-sky-500 font-bold lg:font-semibold">Cleedenz</Link>
        <div className={`hidden lg:flex gap-10 uppercase text-[14px]  ${!scroll ? 'text-white' : 'text-black'} font-semibold`}>
          <NavLink to="/" className='hover:text-sky-500'>Home</NavLink>
          <NavLink to="/about" className='hover:text-sky-500'>About Us</NavLink>
          <NavLink to="/services" className='hover:text-sky-500'>Services</NavLink>
          <NavLink to="/contact" className='hover:text-sky-500'>Contact</NavLink>
        </div>
        <button onClick={handleMenu} className='text-gray-600 lg:hidden text-2xl'>
          <HiMiniBars3 />
        </button>
      </nav>
      <div  id='nav' className={`lg:hidden fixed z-0 w-full ${menu ? 'top-[70px] shadow-2xl' : '-top-[150px] shadow-0'} text-black flex flex-col text-center gap-3 uppercase text-[14px] bg-white py-6 transition-all duration-500`}>
        <NavLink to="/" className='hover:text-sky-500'>Home</NavLink>
        <NavLink to="/about" className='hover:text-sky-500'>About Us</NavLink>
        <NavLink to="/services" className='hover:text-sky-500'>Services</NavLink>
        <NavLink to="/contact" className='hover:text-sky-500'>Contact</NavLink>
      </div>
    </>
  )
}

export default Navbar