import { lazy, Suspense, useEffect } from "react";

const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const Services = lazy(() => import('./pages/services/Services'))
const Contact = lazy(() => import('./pages/contact/Contact'))

import { HashRouter, Routes, Route, useLocation } from "react-router-dom";


import { AnimatePresence } from 'framer-motion'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Loader from "./components/Loader";
import GoogleTranslate from "./components/GoogleTranslate";

function LocationProvider({ children }){
  return <AnimatePresence>{ children }</AnimatePresence>
}

function RoutesWithAnimation(){
  const location = useLocation()
  const routeVariants = {
    initial:{
      opacity:0
    },
    final:{
      opacity:1
    }
  }
  return(
    <Routes location={location} key={location.key}>
      <Route index element={<Home animation={routeVariants} />} />
      <Route path="/about" element={<About animation={routeVariants} />} />
      <Route path="/services" element={<Services animation={routeVariants} />} />
      <Route path="/contact" element={<Contact animation={routeVariants} />} />
    </Routes>
  )
}


function App() {
  
  
  return (
    <div>
    <Suspense fallback={<Loader />}>
      <HashRouter>
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </HashRouter>
    </Suspense>
    <GoogleTranslate />
    </div>
  )
}

export default App