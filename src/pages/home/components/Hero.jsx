import HeroBg from '../assets/hero-bg.jpg'

const Hero = () => {
  return (
    <div className="w-screen h-[700px] lg:h-screen text-white" style={{backgroundImage: `url(${HeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='bg-[#000000a7] w-full h-full px-[20px] md:px-[50px] lg:px-[120px] flex flex-col justify-center'>
        <div className='md:w-[510px]'>
          <h1 className='text-[2.6rem] md:text-6xl md:leading-tight uppercase font-semibold'>We are smart a creative agency</h1>
          <p className='md:w-[360px] lg:w-full mt-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ad rerum repellat. Sequi, labore, illo. Ducimus voluptates quidem obcaecati, ad.
          </p>
          <div className='mt-5 flex flex-wrap gap-4'>
            <button className='bg-sky-500 hover:bg-sky-700 uppercase py-[10px] px-7 rounded-3xl border-2 border-sky-500 hover:border-sky-700 font-semibold'>Explore us</button>
            <button className='uppercase py-[10px] px-7 rounded-3xl border-2 border-white font-semibold'>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero