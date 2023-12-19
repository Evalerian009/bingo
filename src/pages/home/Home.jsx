import Hero from "./components/Hero"
import Offers from "./components/Offers"
import Reviews from "./components/Reviews"
import Services from "./components/Services"
import Stats from "./components/Stats"
import Banner from "./components/Banner"

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Offers />
      <Services />
      <Banner />
      <Stats />
      <Reviews />
    </div>
  )
}

export default Home