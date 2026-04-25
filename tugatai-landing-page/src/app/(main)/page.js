import React from 'react'
import Home from '../component/(landing page)/Home'
import HowItWorks from '../component/(landing page)/HowItWorks'
import FAQ from '../component/(landing page)/FAQ'
import Call from '../component/(landing page)/Call'
import Features from '../component/(landing page)/Features'
import Pricing from '../component/(landing page)/Pricing'
import Testimonial from '../component/(landing page)/Testimonial'
import Stats from '../component/(landing page)/Stats'

const page = () => {
  return (
    <div>
      <Home/>
      <HowItWorks/>
      <Call/>
      <Features/>
      <Stats/>
      <Pricing/>
      <FAQ/>
      <Testimonial/>
    </div>
  )
}

export default page
