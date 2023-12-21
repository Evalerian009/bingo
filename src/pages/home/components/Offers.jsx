import OffersImg from '../assets/offers-img.png'
import { offers } from '../constants';




const Offers = () => {
  return (
    <div className="py-14 px-[20px] md:p-[50px] lg:px-[120px] lg:py-[100px] text-center">
      <h2 className="text-3xl md:text-4xl font-semibold capitalize text-gray-700">What do we offer</h2>
      <p className="md:w-[550px] mx-auto  mt-4 font-semibold">Cleedenz Offer cybersecurity assessments, penetration testing, and security solutions to protect clients from cyber threats. Providing swift solution to hacking, Recovery and spying services.</p>
      <div className="w-[100px] mx-auto h-[2px] bg-sky-300 mt-5" />

      <div className='mt-[20px] md:mt-[70px] flex flex-col md:flex-row gap-x-5'>
        <div className='w-full h-[200px] md:h-auto md:w-1/3'>
          <img src={OffersImg} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='md:w-2/3 flex flex-col md:flex-row flex-wrap gap-4'>
          {offers.map(offer => {
            const Icon = offer.icon
            return(
              <div key={offer.id} className='w-full md:w-[48%] px-5 py-10 hover:shadow-2xl transition-all duration-500 rounded-xl border'>
                <div className='hover:bg-white bg-sky-400 w-fit mx-auto  p-2 roun,,ded-full text-white hover:text-sky-500'>
                  <Icon className='text-4xl' />
                </div>
                <h3 className='text-2xl font-semibold text-gray-700'>{offer.header}</h3>
                <p>{offer.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Offers