import React, { useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'

import { usePlayer } from '../../contexts/PlayerContext'

import {
  Container,
  Header,
  Artwork,
  Title,
  Artist,
  Wrapper,
  ActionButtons,
  ActionButton,
} from './styled'

const Player: React.FC = () => {
  const theme = useContext(ThemeContext)

  const { isPlaying, isPaused, currentTrack, play, pause, seekTo } = usePlayer()

  if (!currentTrack) {
    return null
  }

  return (
    <Container>
      <Header>
        <Artwork source={{ uri: currentTrack.artwork }} />
        <Title>{currentTrack.title}</Title>
        <Artist>{currentTrack.artist}</Artist>
      </Header>

      <Wrapper>
        <ActionButtons>
          <ActionButton onPress={() => seekTo(-30)}>
            <MaterialIcons
              name='replay-30'
              size={32}
              color={theme.colors.white}
            />
          </ActionButton>

          {isPaused && (
            <ActionButton onPress={() => play()}>
              <MaterialIcons
                name='play-arrow'
                size={64}
                color={theme.colors.white}
              />
            </ActionButton>
          )}

          {isPlaying && (
            <ActionButton onPress={() => pause()}>
              <MaterialIcons
                name='pause'
                size={64}
                color={theme.colors.white}
              />
            </ActionButton>
          )}

          <ActionButton onPress={() => seekTo(30)}>
            <MaterialIcons
              name='forward-30'
              size={32}
              color={theme.colors.white}
            />
          </ActionButton>
        </ActionButtons>
      </Wrapper>
    </Container>
  )
}

export default Player
