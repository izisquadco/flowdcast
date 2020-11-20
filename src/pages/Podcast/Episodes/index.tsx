import React, { useContext, useCallback } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'

import { usePlayer } from '../../../contexts/PlayerContext'

import Profile from './Profile'

import episodes from './episodes.json'

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

  const { play } = usePlayer()

  const keyExtractor = useCallback(({ id }) => String(id), [])

  const renderItem = useCallback(
    ({
      item: { id, mp3: url, title, artist, artwork, avatar, description },
    }) => (
      <Episode
        onPress={() =>
          play({
            id,
            url,
            title,
            artwork: artwork ?? avatar,
            artist,
          })
        }
        rippleColor={theme.colors.ripple}
      >
        <Content>
          <Title>{title}</Title>
          <Description numberOfLines={3}>{description}</Description>
          <Artist>{artist}</Artist>

          <PlayButtonContainer>
            <PlayButton
              onPress={() =>
                play({
                  id,
                  url,
                  title,
                  artwork: artwork ?? avatar,
                  artist,
                })
              }
            >
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
    [play, theme.colors.ripple, theme.colors.white],
  )

  const renderHeader = useCallback(() => <Profile />, [])

  return (
    <Container>
      <Wrapper
        data={episodes}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}

export default Episodes
