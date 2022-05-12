import NavBar from '../../components/NavBar/NavBar'
import SunsetTree from './sunsetTree.jpg'
import './About.css'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AboutVariants } from './AboutVariants'
import Hero from '../../components/Hero/Hero'

const About = () => {
  const NavbarAnimation = useAnimation()
  const [navbarRef, navbarInView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (navbarInView) NavbarAnimation.start('hidden')
    else NavbarAnimation.start('visible')
  }, [navbarInView])

  // Change Page Title
  useEffect(() => {
    document.title = 'Kalikasan - About'
  }, [])

  return (
    <div className="about-page">
      {/* Hero Section */}
      <Hero imgSrc={SunsetTree} 
            customVariant={AboutVariants.Navbar} 
            header="About"
            customY="-250px" />

      {/* About Content */}
      <div className="about-cont">
        <div className="about-content">
          <h1>Why We Do This</h1>
          <p>Human activities such as burning fossil fuels resulted in long-term shifts in temperature and weather patterns. Climate change refers to the global and regional changes in climate patterns due to human activities. Approximately 1.5 trillion tonnes of carbon dioxide have been released into the atmosphere since the industrial revolution. In the year 2019, we pumped out 37 billion more CO2. We have emitted fifty percent more carbon dioxide since the early 21st century and almost three times as much as fifty years ago. Apart from carbon dioxide emissions, we were also emitting other greenhouse gasses such as methane and nitrous oxide. All the greenhouse gasses combined account for 51 billion tonnes of greenhouse gas emissions annually. Emissions continue to rise, but they need to go down to zero. </p>
          <p>Recently, the consequences of climate change have become more severe and visible. There are more heatwaves, ice glaciers are melting, and the lowest amount of ice ever recorded in the North Pole. According to the Average Temperature Anomaly, 20 of the past 22 years recorded the hottest global temperatures. To combat the rapid climate, we must decrease our collective CO2 emissions. </p>
          <p>Before we aim to reduce carbon dioxide emissions, industrializing a country requires carbon dioxide. For a country to develop, CO2 emissions are needed to industrialize itself. To resolve this issue of climate change, everyone should fix it.</p>
        </div>
      </div>
    </div>
  )
}

export default About