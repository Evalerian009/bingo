import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import ServiceSlides from "./components/ServiceSlides"
import ServicesList from "./components/ServicesList"

const Services = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div>
        <ServicesList />
        <ServiceSlides />
      </div>
      <Footer />
    </>
  )
}

export default Services