import React, {useEffect } from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import MainSection from '../components/MainSection'
import Navbar from '../components/Navbar'
import Services from '../components/OurServices'
import Slider from '../components/PartnersSection'
import Team from '../components/OurTeam'

import ScrollReveal from 'scrollreveal'
import { FooterContextProvider } from '../components/Footer/FooterContext'


const Home = () => {


    useEffect(() => {
		 const top = {
        origin: 'top',
        delay: 500,
        distance: '25rem',
        mobile: false,

    }
    const right = {
        origin: 'right',
        delay: 700,
        rotate: {
            x: 70,
            z: 70
        },
        mobile: false,

    }

    const bottom = {
        origin: 'bottom',
        delay: 900,
        distance: '25rem',
        mobile: false,

    }

    const left = {
        origin: 'left',
        delay: 1100,
        rotate: {
            x: 70,
            z: 70
        },
        mobile: false,
    }
	
        ScrollReveal().reveal('.reveal-left', left)
        ScrollReveal().reveal('.reveal-right', right)
        ScrollReveal().reveal('.reveal-top', top)
        ScrollReveal().reveal('.reveal-bottom', bottom)
    }, [])


    return (
        <>
            <Navbar />
            <HeroSection />
            <MainSection />
            <Services />
            <Team />
            <Slider />
            <FooterContextProvider>
                <Footer />
            </FooterContextProvider>

        </>
    )
}

export default Home