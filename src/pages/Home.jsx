import React from 'react'
import Banner from '../components/bannerpart/Banner'
import Mint from '../components/mintpart/Mint'
import About from '../components/aboutpart/About'
import Latest from '../components/latestpart/Latest'
import RoadMap from '../components/roadmapPart/RoadMap'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Mint/>
      <About/>
      <Latest/>
      <RoadMap/>
    </div>
  )
}

export default Home