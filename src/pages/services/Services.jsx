import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import ServiceSlides from "./components/ServiceSlides"
import ServicesList from "./components/ServicesList"
import { motion } from "framer-motion"

const Services = ({ animation }) => {
  return (
    <motion.div
      variants={ animation }
      initial = 'initial'
      animate = 'final'
      transition={{duration: 0.6}}
    >
      <Navbar />
      <Header />
      <div>
        <ServicesList />
        <ServiceSlides />
      </div>
      <Footer />
    </motion.div>
  )
}

export default Services