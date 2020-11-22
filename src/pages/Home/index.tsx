import React from 'react'

import Trending from './Trending'

import Ad from '../../components/Ad'

import { Container } from './styled'

const Home: React.FC = () => {
  return (
    <Container>
      <Trending />
      <Ad id='ca-app-pub-5021327379088901/6262037310' />
    </Container>
  )
}

export default Home
