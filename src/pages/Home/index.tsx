import React from 'react'

import Trending from './Trending'

import BottomPlayer from '../../components/BottomPlayer'

import { Container } from './styled'

const Home: React.FC = () => {
  return (
    <Container>
      <Trending />
      <BottomPlayer />
    </Container>
  )
}

export default Home
