import React from 'react'
import Banner from '../Banner/Banner'
import AssistingSection from '../Assisting/Assisting'

export default function Hero() {
  return (
    <div className="bg-[url('/images/globe.png')] bg-cover bg-center bg-no-repeat -mt-24">
      <Banner></Banner>
      <AssistingSection></AssistingSection>
    </div>
  )
}
