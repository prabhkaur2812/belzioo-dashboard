import Banner from './components/banner/Banner'
import Heading from './components/heading/Heading'
import Card from './components/card/Card'
import React from 'react'
import Data from '../../../../data/shoes'

export default function Home() {
  return (
    <div>
       <Banner/>
        <Heading/>
        <Card data={Data}/>
    </div>
  )
}

