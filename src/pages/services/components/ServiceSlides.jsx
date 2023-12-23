import Slider from "react-slick";

import { logos, reviews } from "../constants";

import { IoChatbubblesSharp } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";

const ServiceSlides = () => {
  var logoSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  var reviewSettings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  return (
    <>
      <div className="py-14 px-[20px] md:px-[50px] md:py-[40px] lg:px-[100px]">
        <Slider {...logoSettings}>
          {logos.map(item => (
            <div key={item.id}>
              <img src={item.img} alt={item.id} className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
        </div>
        
      <div className="mt-16 py-14 px-[20px] md:px-[50px] md:py-[70px] lg:px-[100px] text-center bg-gradient-to-b from-sky-500 from-75% md:from-65% to-white to-75% md:to-65% text-white">
        <Slider {...reviewSettings}>
            {reviews.map(slide => (
              <div key={slide.id}>
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

export default ServiceSlides