import React, { useCallback, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

import podcasts from './podcasts.json'

import {
  Container,
  Wrapper,
  Podcast,
  Avatar,
  Artist,
  Footer,
  Label,
} from './styled'

const Podcasts: React.FC = () => {
  const theme = useContext(ThemeContext)
  const navigation = useNavigation()

  const handleNavigate = useCallback(() => {
    navigation.navigate('Podcast')
  }, [navigation])

  const keyExtractor = useCallback(({ id }) => String(id), [])

  const renderItem = useCallback(
    ({ item: { avatar, artist, disabled } }) => (
      <Podcast disabled={disabled} onPress={handleNavigate}>
        <Avatar source={{ uri: avatar }} />

        <Artist>{artist}</Artist>
      </Podcast>
    ),
    [handleNavigate],
  )

  return (
    <Container>
      <Wrapper
        data={podcasts}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingLeft: theme.spacing.default.v,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />

      <Footer>
        <Label>Em alta</Label>
      </Footer>
    </Container>
  )
}

export default Podcasts
