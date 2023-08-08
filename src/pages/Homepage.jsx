import React from 'react'
import { Section1, Section2, Section3, Section4 } from '../components/HomePageSection'
import imageCarousel from '../components/HomePageSection/imageCarousel'
const Homepage = () => {
  return (
    <>
    <Section1/>
    <Section2/>
    <Section3 imageCarousel={imageCarousel}/>
    <Section4/>     
    </>
  )
}

export default Homepage