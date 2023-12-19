import HeaderBg from './assets/headerbg.jpg'

const Header = () => {
  return (
    <div className="mt-[100px] lg:mt-0 w-screen h-[250px] lg:h-[320px] text-white" style={{backgroundImage: `url(${HeaderBg})`, backgroundSize: 'cover', backgroundPosition: 'top'}}>
      <div className='bg-[#000000a7] w-full h-full lg:py-14 px-[20px] md:p-[50px] lg:px-[100px] text-center flex flex-col justify-center'>
        <h1 className='text-4xl'>About Us</h1>
        <h2 className='mt-2 font-light text-lg'>Home / About Us</h2>
      </div>
    </div>
  )
}

export default Header