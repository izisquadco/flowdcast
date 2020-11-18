import React, { useCallback } from 'react'

import { Container, Wrapper, Podcast, Avatar, Artist } from './styled'

const data = [
  {
    id: 1,
    avatar:
      'https://yt3.ggpht.com/a/AATXAJx4y3EbLBYR405vabr6Vu-uEmJT6c3bCvfmDhexFA=s88-c-k-c0x00ffffff-no-rj',
    artist: 'Flow',
  },

  {
    id: 2,
    avatar:
      'https://yt3.ggpht.com/a/AATXAJx4y3EbLBYR405vabr6Vu-uEmJT6c3bCvfmDhexFA=s88-c-k-c0x00ffffff-no-rj',
    artist: 'Flow',
  },

  {
    id: 3,
    avatar:
      'https://yt3.ggpht.com/a/AATXAJx4y3EbLBYR405vabr6Vu-uEmJT6c3bCvfmDhexFA=s88-c-k-c0x00ffffff-no-rj',
    artist: 'Flow',
  },
]

const Podcasts: React.FC = () => {
  const keyExtractor = useCallback(({ id }) => String(id), [])

  const renderItem = useCallback(
    ({ item: { avatar, artist } }) => (
      <Podcast>
        <Avatar source={{ uri: avatar }} />
        <Artist>{artist}</Artist>
      </Podcast>
    ),
    [],
  )

  return (
    <Container>
      <Wrapper
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </Container>
  )
}

export default Podcasts
