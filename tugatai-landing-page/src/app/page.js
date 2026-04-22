import React from 'react'
import Home from './component/(landing page)/Home'
import HowItWorks from './component/(landing page)/HowItWorks'
import FAQ from './component/(landing page)/FAQ'
import Call from './component/(landing page)/Call'
import Features from './component/(landing page)/Features'
import Pricing from './component/(landing page)/Pricing'

const page = () => {
  return (
    <div>
      <Home/>
      <Call/>
      <HowItWorks/>
      <Features/>
      <Pricing/>
      <FAQ/>
    </div>
  )
}

export default page