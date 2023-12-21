import { stats } from "../constants";
import CountUp from 'react-countup';

const Stats = () => {

  return (
    <div className="py-14 px-[20px] md:px-[50px] md:py-[70px] lg:px-[100px]">
      <div className="text-center md:w-[550px] mx-auto">
        <h2 className="text-3xl text-gray-800 font-semibold">Award-winning Agency</h2>
        <p className="mt-4">Our agency has been an award-winning agency due to our involves in combination of factors, including excellent work, innovation, customer satisfaction, and recognition within your organizations.</p>
      </div>
      <div className="mt-6 flex flex-wrap items-center text-center justify-center">
        {stats.map(stat => {
          const Icon = stat.icon
          return(
            <div key={stat.id} className="w-full md:w-1/2 md:w-1/4 p-5 flex flex-col gap-1">
              <span className="block mx-auto w-fit text-sky-500 text-5xl">
                <Icon  />
              </span>
              <div className={`text-3xl font-semibold text-gray-800`}>
                <CountUp end={stat.figure} enableScrollSpy scrollSpyOnce />
              </div>
              <span className="text-lg text-gray-700 font-semibold">{stat.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Stats