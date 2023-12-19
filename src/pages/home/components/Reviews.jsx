import Slider from "react-slick";

import { IoChatbubblesSharp } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";

import { slides } from '../constants'

const Reviews = () => {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <>
      <div className="py-14 px-[20px] md:px-[50px] md:py-[70px] lg:px-[100px] bg-gradient-to-b from-sky-500 from-75% md:from-65% to-white to-75% md:to-65% text-white text-center">
        <Slider {...settings}>
          {slides.map(slide => (
            <div key={slide.id} className="w-fit mx-auto">
              <div className="w-fit mx-auto text-6xl"><IoChatbubblesSharp /></div>
              <p className="mt-10 px-[16px] md:px-0 md:w-[83%] lg:w-[88%] mx-auto text-[16px]">{slide.text}</p>
              <div className="w-fit mx-auto text-6xl bg-white text-gray-900 p-7 mt-10 rounded-full">
                <HiUser />
              </div>
              <h5 className="mt-4 text-3xl font-semibold text-gray-900 text-center">{slide.user}</h5>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Reviews