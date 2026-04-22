import React from 'react'
import Home from './component/(landing page)/Home'
import HowItWorks from './component/(landing page)/HowItWorks'
import FAQ from './component/(landing page)/FAQ'
import Call from './component/(landing page)/Call'
import Features from './component/(landing page)/Features'

const page = () => {
  return (
    <div>
      <Home/>
      <Call/>
      <HowItWorks/>
      <Features/>
      <FAQ/>
    </div>
  )
}

export default page