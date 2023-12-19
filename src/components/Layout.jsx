import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = () => {

  return (
    <main id="container" className="w-screen overflow-x-hidden">
      <Navbar />
      <div className="mt-[8px] lg:mt-0 text-gray-500">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}

export default Layout