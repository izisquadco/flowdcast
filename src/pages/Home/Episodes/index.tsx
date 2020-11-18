import React, { useCallback } from 'react'

import { Container, Wrapper, Header, Label, Episode, Artwork } from './styled'

const data = [
  {
    id: 1,
    artwork:
      'https://yt3.ggpht.com/a/AATXAJx4y3EbLBYR405vabr6Vu-uEmJT6c3bCvfmDhexFA=s88-c-k-c0x00ffffff-no-rj',
    artist: 'Flow',
  },

  {
    id: 2,
    artwork:
      'https://yt3.ggpht.com/a/AATXAJx4y3EbLBYR405vabr6Vu-uEmJT6c3bCvfmDhexFA=s88-c-k-c0x00ffffff-no-rj',
    artist: 'Flow',
  },

  {
    id: 3,
    artwork:
      'https://yt3.ggpht.com/a/AATXAJx4y3EbLBYR405vabr6Vu-uEmJT6c3bCvfmDhexFA=s88-c-k-c0x00ffffff-no-rj',
    artist: 'Flow',
  },
]

const Episodes: React.FC = () => {
  const keyExtractor = useCallback(({ id }) => String(id), [])

  const renderItem = useCallback(
    ({ item: { artwork } }) => (
      <Episode>
        <Artwork source={{ uri: artwork }} />
      </Episode>
    ),
    [],
  )

  const renderHeader = useCallback(
    () => (
      <Header>
        <Label>Em destaque</Label>
      </Header>
    ),
    [],
  )

  return (
    <Container>
      <Wrapper
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}

export default Episodes
