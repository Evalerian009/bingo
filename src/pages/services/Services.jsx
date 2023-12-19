import Header from "../../components/Header"
import ServiceSlides from "./components/ServiceSlides"
import ServicesList from "./components/ServicesList"

const Services = () => {
  return (
    <>
      <Header />
      <div>
        <ServicesList />
        <ServiceSlides />
      </div>
    </>
  )
}

export default Services