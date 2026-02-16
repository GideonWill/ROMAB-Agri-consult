import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import ServicesPreview from '../components/ServicesPreview'
import VideoHero from '../components/VideoHero'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <AboutPreview />
            <ServicesPreview />
            <VideoHero />
            <Footer />
        </main>
    )
}

export default Home
