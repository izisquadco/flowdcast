import React from 'react'

import Episodes from './Episodes'

import BottomPlayer from '../../components/BottomPlayer'

import { Container } from './styled'

const Podcast: React.FC = () => {
  return (
    <Container>
      <Episodes />
      <BottomPlayer />
    </Container>
  )
}

export default Podcast
