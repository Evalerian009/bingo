import { lazy, Suspense } from "react";

const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const Services = lazy(() => import('./pages/services/Services'))
const Contact = lazy(() => import('./pages/contact/Contact'))

import { HashRouter, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./components/Loader";


function App() {
  
  return (
    <Suspense fallback={<Loader />}>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </Suspense>
  )
}

export default App