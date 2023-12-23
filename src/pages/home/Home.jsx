import Hero from "./components/Hero"
import Offers from "./components/Offers"
import Reviews from "./components/Reviews"
import Services from "./components/Services"
import Stats from "./components/Stats"
import Banner from "./components/Banner"
import Navbar from "../../components/Navbar"
import Footer from '../../components/Footer'
import { motion } from "framer-motion"

const Home = ({ animation }) => {
  return (
    <motion.div
      variants={ animation }
      initial = 'initial'
      animate = 'final'
      transition={{duration: 0.6}}
    >
      <Navbar />
      <Hero />
      <Offers />
      <Services />
      <Banner />
      <Stats />
      <Reviews />
      <Footer />
    </motion.div>
  )
}

export default Home