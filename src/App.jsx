import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import AboutUs from './Components/AboutUs'
import HowItWorks from './Components/HowItWorks'
import FeaturesBenefit from './Components/FeaturesBenefit'
import FInalCTA from './Components/FInalCTA'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <AboutUs/>
      <HowItWorks/>
      <FeaturesBenefit/>
      <FInalCTA/>
      <Footer/>
      
    </div>
  )
}

export default App