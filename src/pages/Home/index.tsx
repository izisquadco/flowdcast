import React from 'react'

import Player from '../../components/Player'

import Trending from './Trending'

import { Container } from './styled'

const Home: React.FC = () => {
  return (
    <Container>
      <Player />
      <Trending />
    </Container>
  )
}

export default Home
