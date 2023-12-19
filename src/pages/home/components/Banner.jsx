import CtaImg from '../assets/cta-img.jpg'

const Banner = () => {
  return (
    <div className='w-screen h-[] py-14 px-[20px] md:px-[50px] md:py-[80px] lg:p-[100px] text-white text-center' style={{backgroundImage: `url(${CtaImg})`, backgroundSize: 'cover'}}>
      <div className='lg:w-[570px] mx-auto'>
        <h3 className='text-4xl uppercase font-bold'>How can we help you?</h3>
        <p className='mt-4 text-[20px] font-light'>For special requests, questions or consultancy click on the link below to contact us. For fast response Click on the live support option and we will have our agent attend to you immidate requests.</p>
        <button className='bg-sky-500 hover:bg-sky-600 mt-8 py-2 px-5 rounded-3xl font-semibold uppercase'>contact us</button>
      </div>
    </div>
  )
}

export default Banner