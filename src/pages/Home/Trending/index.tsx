import React, { useContext, useCallback } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'

import Podcasts from './Podcasts'

import trending from './trending.json'

import {
  Container,
  Wrapper,
  Episode,
  Content,
  Title,
  Description,
  Artist,
  PlayButtonContainer,
  PlayButton,
  PlayButtonText,
} from './styled'

const Episodes: React.FC = () => {
  const theme = useContext(ThemeContext)

  const keyExtractor = useCallback(({ id }) => String(id), [])

  const renderItem = useCallback(
    ({ item: { title, description, artist } }) => (
      <Episode rippleColor={theme.colors.ripple}>
        <Content>
          <Title>{title}</Title>
          <Description numberOfLines={3}>{description}</Description>
          <Artist>{artist}</Artist>

          <PlayButtonContainer>
            <PlayButton>
              <MaterialIcons
                name='play-circle-fill'
                size={18}
                color={theme.colors.white}
              />
              <PlayButtonText>TOCAR</PlayButtonText>
            </PlayButton>
          </PlayButtonContainer>
        </Content>
      </Episode>
    ),
    [theme.colors.ripple, theme.colors.white],
  )

  const renderHeader = useCallback(() => <Podcasts />, [])

  return (
    <Container>
      <Wrapper
        data={trending}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}

export default Episodes
