import React from 'react'

import Podcasts from './Podcasts'
import Episodes from './Episodes'

import { Container } from './styled'

const Home: React.FC = () => {
  return (
    <Container>
      <Podcasts />
      <Episodes />
    </Container>
  )
}

export default Home
