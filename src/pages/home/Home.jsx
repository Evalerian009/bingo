import Hero from "./components/Hero"
import Offers from "./components/Offers"
import Reviews from "./components/Reviews"
import Services from "./components/Services"
import Stats from "./components/Stats"
import Banner from "./components/Banner"
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Offers />
      <Services />
      <Banner />
      <Stats />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home