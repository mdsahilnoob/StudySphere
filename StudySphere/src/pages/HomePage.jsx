import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/Home/NavBar'
import HeroSection from '../components/Home/HeroSection'
import AboutUs from '../components/Home/AboutUs'
import FeaturedOn from '../components/Home/FeaturedOn'
import Features from '../components/Home/Features'
import OurLearningApp from '../components/Home/OurLearningApp'
import Testimonials from '../components/Home/Testimonials'
import Footer from '../components/Home/Footer'

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutUs />
      <FeaturedOn />
      <Features />
      <OurLearningApp />
      <Testimonials />
      <Footer />
    </div>
    
  )
}

export default HomePage