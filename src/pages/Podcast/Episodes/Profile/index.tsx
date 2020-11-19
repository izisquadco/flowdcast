import React, { useCallback, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import podcast from './podcast.json'

import {
  Container,
  Wrapper,
  Podcast,
  Avatar,
  Artist,
  Footer,
  Label,
} from './styled'

const Profile: React.FC = () => {
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
        data={podcast}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingLeft: theme.spacing.default.v,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />

      <Footer>
        <Label>Episódios</Label>
      </Footer>
    </Container>
  )
}

export default Profile
