import React, { useCallback, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { Container, Wrapper, Podcast, Avatar, Artist } from './styled'

const data = [
  {
    id: 1,
    avatar:
      'https://yt3.ggpht.com/a/AATXAJx4y3EbLBYR405vabr6Vu-uEmJT6c3bCvfmDhexFA=s512-c-k-c0x00ffffff-no-rj',
    artist: 'Flow',
  },

  {
    id: 2,
    avatar:
      'https://yt3.ggpht.com/ytc/AAUvwniChRToD--JOEs8A18uXL3jSlsxAGpO2uUFdzbO=s512-c-k-c0x00ffffff-no-rj',
    artist: 'Podpah',
  },

  {
    id: 3,
    avatar:
      'https://yt3.ggpht.com/ytc/AAUvwniWjY-_QAlsa1cONZZlOzy1a0Uz_cj9kb34GcSK=s512-c-k-c0x00ffffff-no-rj-mo',
    artist: 'Master',
  },

  {
    id: 4,
    avatar:
      'https://yt3.ggpht.com/a/AATXAJx4y3EbLBYR405vabr6Vu-uEmJT6c3bCvfmDhexFA=s512-c-k-c0x00ffffff-no-rj',
    artist: 'Flow',
  },

  {
    id: 5,
    avatar:
      'https://yt3.ggpht.com/a/AATXAJx4y3EbLBYR405vabr6Vu-uEmJT6c3bCvfmDhexFA=s512-c-k-c0x00ffffff-no-rj',
    artist: 'Flow',
  },

  {
    id: 6,
    avatar:
      'https://yt3.ggpht.com/a/AATXAJx4y3EbLBYR405vabr6Vu-uEmJT6c3bCvfmDhexFA=s88-c-k-c0x00ffffff-no-rj',
    artist: 'Flow',
  },
]

const Podcasts: React.FC = () => {
  const theme = useContext(ThemeContext)

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
        contentContainerStyle={{
          paddingLeft: theme.spacing.default.v,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </Container>
  )
}

export default Podcasts
