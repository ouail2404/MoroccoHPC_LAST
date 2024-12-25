import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Keynotes from './Keynotes';
import Footer from './Footer';
import HeroMain from './HeroMain';

function Home() {
  return (
    <div>
    <Navbar />
    <HeroMain />
    <Hero/>
    <Keynotes />
    <Footer />
    </div>
  )
}

export default Home