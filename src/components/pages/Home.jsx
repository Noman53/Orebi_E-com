import React from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import Terms from '../layouts/Terms'
import Sales from '../layouts/Sales'
import NewArrival from '../layouts/NewArrival'
import Bestsellers from '../layouts/Bestsellers'
import Adds from '../layouts/Adds'
import SpecialOffers from '../layouts/SpecialOffers'

const Home = () => {
  return (
  <>
  <Banner/>
  <Terms/>
  <Sales/>
  <NewArrival/>
  <Bestsellers/>
  <Adds/>
  <SpecialOffers/> 
  </>
  )
}

export default Home