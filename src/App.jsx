import { lazy, Suspense } from "react";

const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const Services = lazy(() => import('./pages/services/Services'))
const Contact = lazy(() => import('./pages/contact/Contact'))

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from "./components/Loader";


function App() {
  
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Loader />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App