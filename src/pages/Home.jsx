import React from 'react'
import Scroller from '../components/HomeComponents/Scroller'
import Restochains from '../components/HomeComponents/RestoChains'
import RestoChains2 from '../components/HomeComponents/RestoChains2'

function Home() {
  return (
    <div className='HomeBody'>
      <Scroller/>
      <Restochains/>
      <RestoChains2/>
    </div>
  )
}


export default Home