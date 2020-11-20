import React, { useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TextTicker from 'react-native-text-ticker'
import { ThemeContext } from 'styled-components'

import { usePlayer } from '../../contexts/PlayerContext'

import {
  Container,
  Artwork,
  Content,
  Title,
  Artist,
  ActionButtonContainer,
  ActionButton,
} from './styled'

const BottomPlayer: React.FC = () => {
  const theme = useContext(ThemeContext)

  const {
    isPlaying,
    isPaused,
    isEmpty,
    currentTrack,
    play,
    pause,
  } = usePlayer()

  if (isEmpty || !currentTrack) return null

  return (
    <Container>
      <Artwork source={{ uri: currentTrack.artwork }} />

      <Content>
        <Title numberOfLines={1}>{currentTrack.title}</Title>
        <Artist>{currentTrack.artist}</Artist>
      </Content>

      <ActionButtonContainer>
        {isPlaying && (
          <ActionButton onPress={() => pause()}>
            <MaterialIcons name='pause' size={24} color={theme.colors.white} />
          </ActionButton>
        )}

        {isPaused && (
          <ActionButton onPress={() => play()}>
            <MaterialIcons
              name='play-arrow'
              size={24}
              color={theme.colors.white}
            />
          </ActionButton>
        )}
      </ActionButtonContainer>
    </Container>
  )
}

export default BottomPlayer
